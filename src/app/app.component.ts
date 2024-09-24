import { Component } from '@angular/core';
import { RouterModule, Routes, provideRouter, RouterOutlet} from '@angular/router';
import { FormsModule } from '@angular/forms'; // importierte Formulare

import { MyTextComponent } from "./my-text/my-text.component"; // meine Komponente
import { MeinBeipielComponent } from "./mein-beipiel/mein-beipiel.component"; // meine Komponente

// Definiere deine Routen für die beiden Inhalte
const routes: Routes = [
  {path: 'content1', loadComponent: () => import('./content1/content1.component').then(m => m.Content1Component)},
  {path: 'content2', loadComponent: () => import('./content2/content2.component').then(m => m.Content2Component)},
  {path: '', redirectTo: 'content1', pathMatch: 'full'} // Standard-Weiterleitung
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule, // Importiere RouterModule
    RouterOutlet, 
    MyTextComponent, 
    MeinBeipielComponent, 
    FormsModule // Importiere FormsModule
  ], 
  providers: [
    provideRouter(routes) // Stelle das Routing bereit
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
}
