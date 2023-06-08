import { Component, OnInit } from '@angular/core';
import { Equipe } from './../model/Equipe';
import { EquipeService } from './../Service/equipe.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {


  listEtudiants : any; 
  form : boolean = false;
   etud!: Equipe;
  
  


  constructor(private equipeservice:EquipeService) { }

  ngOnInit(): void { this.getAllequipe();;
    this.etud = {
      idEquipe: null,
      nomEquipe: "",
    
  }
  }

getAllequipe(){
  this.equipeservice.GetAllequipe().subscribe(res => this.listEtudiants = res)
}

addequipe(p: any){
  this.equipeservice.Addequipe(p).subscribe(() => {
    this.getAllequipe();
    this.form = false;
  });
}

editequipe(et : Equipe){
  this.equipeservice.editequipe(et).subscribe();
}
deleteequipe(id : any){
  this.equipeservice.deleteequipe(id).subscribe(() => this.getAllequipe())
}
}