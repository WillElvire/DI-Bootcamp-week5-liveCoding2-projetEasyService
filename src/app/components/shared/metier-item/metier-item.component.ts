import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metier-item',
  templateUrl: './metier-item.component.html',
  styleUrls: ['./metier-item.component.css']
})
export class MetierItemComponent {
  @Input() icon ?: string ;
  @Input() text ?: string ;
}
