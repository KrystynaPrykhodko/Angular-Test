import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mein-beipiel',
  standalone: true, // das ist eine Standalone, es gibt keine app.modul.ts, sondern es wird hier direkt eingebaut
  imports: [FormsModule], // hier das FormModule importieren
  templateUrl: './mein-beipiel.component.html',
  styleUrl: './mein-beipiel.component.css'
})
export class MeinBeipielComponent {
  nachricht: string = 'Willkommen zu meiner Angular-Komponente!';

  // Methode die beim submit aufgerufen wird
  onSubmit(formData: any) {
    console.log('Form Data:', formData);
    alert(`Name: ${formData.value.name}, Email: ${formData.value.email}`)
  }
}
