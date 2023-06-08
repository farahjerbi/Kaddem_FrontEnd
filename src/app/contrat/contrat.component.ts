import { Component, OnInit } from '@angular/core';
import { Contact } from './../model/Contact';
import { ContratService } from './../Service/contrat.service';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {


   listcontacts : any; 
   form : boolean = false;
   con!: Contact;
  
  



  constructor(private ContratService:ContratService) { }

  ngOnInit(): void {  this.getAllcon();;
    this.con = {
      idContrat: null,
      datedeb: "",
      datefin: "",
      archive:"",
      montantContrat:null
  }
  }

  

  getAllcon(){
    this.ContratService.GetAllContact().subscribe(res => this.listcontacts = res)
  }
  
  addCont(p: any){
    this.ContratService.AddContact(p).subscribe(() => {
      this.getAllcon();
      this.form = false;
    });
  }

  editCont(et : Contact){
    this.ContratService.editContact(et).subscribe();
  }
  deleteCont(id : any){
    this.ContratService.deleteContact(id).subscribe(() => this.getAllcon())
  }


}
