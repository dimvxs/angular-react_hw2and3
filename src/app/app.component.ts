import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlockComponent } from './block/block.component';
import { Block2Component } from './block2/block2.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlockComponent, Block2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hw';
}
