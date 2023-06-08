import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DepartementComponent } from './departement/departement.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ContratComponent } from './contrat/contrat.component';
import { EquipeComponent } from './equipe/equipe.component';
import { OffreComponent } from './offre/offre.component';
import { UniversityComponent } from './university/university.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { ModifyUniversityComponent } from './modify-university/modify-university.component';
import { EventsComponent } from './events/events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ModifyEventComponent } from './modify-event/modify-event.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ErrorsComponent } from './errors/errors.component';
import { AffectationComponent } from './affectation/affectation.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatFormFieldModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DepartementComponent,
    EtudiantComponent,
    ContratComponent,
    EquipeComponent,
    OffreComponent,
    UniversityComponent,
    AddUniversityComponent,
    ModifyUniversityComponent,
    EventsComponent,
    AddEventComponent,
    ModifyEventComponent,
    ErrorsComponent,
    AffectationComponent,
   

  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
  {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
