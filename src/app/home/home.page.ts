import { AsyncPipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { delay, of } from 'rxjs';
import { CardComponent } from '../card/card.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, NgFor, AsyncPipe, UpperCasePipe, CardComponent],
})
export class HomePage {
  appointments$ = of([1]).pipe(delay(3000));

  constructor() {}
}
