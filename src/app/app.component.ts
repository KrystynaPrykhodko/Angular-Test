import { Component } from '@angular/core';
import { RouterModule, RouterOutlet} from '@angular/router';
import { FormsModule } from '@angular/forms'; // importierte Formulare

import { MyTextComponent } from "./my-text/my-text.component"; // meine Komponente
import { MeinBeipielComponent } from "./mein-beipiel/mein-beipiel.component"; // meine Komponente


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
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
}
