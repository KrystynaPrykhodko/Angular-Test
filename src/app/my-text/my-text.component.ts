import { Component } from '@angular/core';

@Component({
  selector: 'app-my-text',
  standalone: true,
  imports: [],
  templateUrl: './my-text.component.html',
  styleUrl: './my-text.component.css'
})
export class MyTextComponent {
  textNachricht: string = 'TEXT STRING !'
}
