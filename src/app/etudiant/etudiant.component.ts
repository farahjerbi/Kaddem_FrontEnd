import { Component, OnInit } from '@angular/core';
import { EtudiantService } from './../Service/etudiant.service';
import { Etudiant } from './../model/Etudiant';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {


  listEtudiants : any; 
  form : boolean = false;
   etud!: Etudiant;
   closeResult! : string;
  events;
  searchvalue;

 

  constructor( private etudiantService:EtudiantService) { }

  ngOnInit(): void {
    this.getAlletud();;
    this.etud = {
      idEtudiant: null,
      prenomE: "",
      nomE: "",
      image:""
  }
  }

  getAlletud(){
    this.etudiantService.GetAllEtudiant().subscribe(res => this.listEtudiants = res)
  }
  
 addEtudiant (f: any){
    this.etudiantService.AddEtudiant(f).subscribe(() => {
      this.getAlletud();
      this.form = false;
    });
  }

  editEtudiant(et : Etudiant){
    this.etudiantService.editEtudiant(et).subscribe();
  }
  deleteEtudiant(idEtudiant : any){
    this.etudiantService.deleteEtudiant(idEtudiant).subscribe(() => this.getAlletud())
  }

  GetEtudiantByID(idEtudiant : any){

    this.etudiantService.GetAllEtudiantById(idEtudiant).subscribe(() => this.getAlletud())

  }

  handleProfilePictureInput(file) {
    this.getBase64(file[0])
      .subscribe(str => this.etud.image = str);
  }
  getBase64(file): Observable<string> {
    return new Observable<string>(sub => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        sub.next(reader.result.toString());
        sub.complete();
      };
      reader.onerror = error => {
        sub.error(error);
      };
    });
  }

  onsearch(){
    this.etudiantService.search(this.searchvalue).subscribe(
      (data) => {
        if ( this.searchvalue != null) {
          this.events = data;
        }
      }
    );
  }

}
