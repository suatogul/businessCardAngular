import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  // With @Input we can get data from cards.component.ts
  // @Input() card:any; it works this way too! "Any" keyword define the data types. It means it may be any type 
  // @Input() card!:Card; card (c lowercase) it is like props we will take it from one level up component. And Card (c uppercase) is the interface. We can see object keys while writing
  @Input() card!:Card;

  constructor() { }

  ngOnInit(): void {
  }

}
