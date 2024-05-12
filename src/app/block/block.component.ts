import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block',
  standalone: true,
  imports: [],
  templateUrl: './block.component.html',
  styleUrl: './block.component.css'
})
export class BlockComponent {
  @Input() MyImage: string = 'assets/notebooks.png';
  @Input() MyName: string = 'Ноутбуки';
}
