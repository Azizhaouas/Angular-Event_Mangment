import { Routes } from '@angular/router';
import { EditEventComponent } from './edit-event/edit-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AccueilComponent } from './accueil/accueil.component';


export const routes: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: 'add-event', component: AddEventComponent },
    { path: 'edit-event/:id', component: EditEventComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Redirection par défaut.
  ];
  