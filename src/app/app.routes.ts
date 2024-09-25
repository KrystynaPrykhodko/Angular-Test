import { Routes } from '@angular/router';

// Definiere deine Routen für die beiden Inhalte
export const routes: Routes = [
    {path: 'content1', loadComponent: () => import('./content1/content1.component').then(m => m.Content1Component)},
    {path: 'content2', loadComponent: () => import('./content2/content2.component').then(m => m.Content2Component)},
    {path: '', redirectTo: 'content1', pathMatch: 'full'} // Standard-Weiterleitung
  ];
