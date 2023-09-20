import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  imports: [IonicModule, UpperCasePipe],
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
