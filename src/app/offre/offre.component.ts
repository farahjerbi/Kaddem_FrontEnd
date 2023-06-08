import { Component, OnInit } from '@angular/core';
import { Offre } from './../model/Offre';
import { OffreService } from './../Service/offre.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {



  listOffre : any; 
  form : boolean = false;
   off!: Offre;
  
  


  constructor(private offreService:OffreService) { }

  ngOnInit(): void {
    this.getAllOffre();;
  this.off = {
    idOffre: null,
    nomOffre: "",
    descriptionOffre:"",
    TypeOffre:""
}
  }




getAllOffre(){
this.offreService.GetAllOffre().subscribe(res => this.listOffre = res)
}

addOffre(p: any){
this.offreService.AddOffre(p).subscribe(() => {
  this.getAllOffre();
  this.form = false;
});
}

editOffre(et : Offre){
this.offreService.editOffre(et).subscribe();
}
deleteOffre(id : any){
this.offreService.deleteOffre(id).subscribe(() => this.getAllOffre())
}

}