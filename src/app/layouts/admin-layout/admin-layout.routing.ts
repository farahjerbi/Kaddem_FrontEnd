import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';

import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { DepartementComponent } from './../../departement/departement.component';
import { EtudiantComponent } from './../../etudiant/etudiant.component';
import { ContratComponent } from './../../contrat/contrat.component';
import { EquipeComponent } from './../../equipe/equipe.component';
import { OffreComponent } from './../../offre/offre.component';
import { Universite } from 'app/model/Universite';
import { UniversityComponent } from 'app/university/university.component';
import { AddUniversityComponent } from 'app/add-university/add-university.component';
import { ModifyUniversityComponent } from 'app/modify-university/modify-university.component';
import { EventsComponent } from 'app/events/events.component';
import { AddEventComponent } from 'app/add-event/add-event.component';
import { ModifyEventComponent } from 'app/modify-event/modify-event.component';
import { AffectationComponent } from 'app/affectation/affectation.component';



export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {\
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'etudiant',       component: EtudiantComponent},
    { path: 'departement',    component: DepartementComponent},
    { path: 'equipe',         component: EquipeComponent},
    { path: 'offre',          component: OffreComponent},
    { path: 'university',     component: UniversityComponent},

    { path: 'contrat',        component: ContratComponent},
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'add',            component: AddUniversityComponent },
    { path: 'modify/:idUniversite',         component: ModifyUniversityComponent },
    { path: 'events',         component: EventsComponent },
    { path: 'addEvent',         component: AddEventComponent },
    { path: 'Emodify/:idEvent',         component: ModifyEventComponent },
    { path: 'affectation/:idUniversite',         component: AffectationComponent },





];
