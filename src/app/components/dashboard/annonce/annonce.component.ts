import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent {

  
@Input() cardTitle =''
@Input() cardCategory =''
@Input() cardContenu =''
}
