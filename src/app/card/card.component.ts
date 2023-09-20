import { UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  imports: [IonicModule, UpperCasePipe],
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
})
export class CardComponent implements OnInit {
  @Input() appointment: any;
  constructor() {}

  ngOnInit() {}
}
