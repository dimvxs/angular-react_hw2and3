import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block2',
  standalone: true,
  imports: [],
  templateUrl: './block2.component.html',
  styleUrl: './block2.component.css'
})
export class Block2Component {
@Input() MyImage: string = "";
@Input() MyName: string = "";
@Input() link1: string = "";
@Input() link2: string = "";
@Input() link3: string = "";
@Input() link4: string = "";
@Input() link5: string = "";
@Input() link6: string = "";
@Input() link7: string = "";
@Input() link8: string = "";
@Input() link9: string = "";
}
