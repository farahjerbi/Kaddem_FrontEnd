import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Departement } from './../model/Departement';
import { DepartementService } from './../Service/departement.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

  Formdep:any;

   listdepartement : any; 
   form : boolean = false;
   departement!: Departement;
  
  



  constructor( private departementService:DepartementService,private fb:FormBuilder) { 

    this.Formdep=this.fb.group({
  
      nomDepart:['',[Validators.required,Validators.pattern("[a-zA-Z]*"),Validators.minLength(3)]],
    });


  }



  ngOnInit(): void { this.GetAllDepart();;
  }

  GetAllDepart(){
this.departementService.GetAllDepartement().subscribe(res => this.listdepartement = res)

  }


  addDepartement (){
    this.departementService.AddDepartement(this.Formdep.value).subscribe(() => {
      this.GetAllDepart();
      this.form = false;
    });
  }


  
  editdepartement(et : Departement){
    this.departementService.editDepartement(et).subscribe();
  }
  deletedepartement(id : any){
    this.departementService.deleteDepartement(id).subscribe(() => this.GetAllDepart())
  }

  get etatinput(){

    return this.Formdep.controls
    }




}
