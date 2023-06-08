import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UniversiteService } from 'app/Service/universite.service';
import { DepartementService } from 'app/Service/departement.service';

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css']
})
export class AffectationComponent implements OnInit {
  idUniversite= this.route.snapshot.params.idUniversite ;
  univ:any;
  departementList:any;
  formF:FormGroup;
  constructor( private route : ActivatedRoute , private departementservice: DepartementService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formF=this.fb.group({
      Departement:['',[Validators.required,Validators.pattern("[a-zA-Z]*"),Validators.minLength(3)]],
  })

  
  }

  Affectt(){

    const farahh = {
    
      nomEvent: this.formF.get('Departement').value
    
    }
    
    
    
    //     this.departementservice.Affect(farahh,this.idUniversite).subscribe();
    //     window.alert('Your departement has been added !');
    //     this.route.navigate(['university'])
    
    
    // console.log("enafarahh",farahh)
    // console.log("enafarahh",this.formF.get('universite').value)
    
      }
    



}
