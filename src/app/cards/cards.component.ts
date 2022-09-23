import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { config } from 'rxjs';
import { CardModalComponent } from './card-modal/card-modal.component';

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

  constructor(
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }

  openAddCardModal():void{
    this.dialog.open(CardModalComponent, {
      width:'400px'
    })
  }
}
