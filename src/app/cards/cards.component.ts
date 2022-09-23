import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cardItem={
    name:"Suat Ogul",
    title:"Frontend Designer",
    phone:"077 789 87 87",
    email:"example@gmail.com",
    address:"Bern, Switzerland"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
