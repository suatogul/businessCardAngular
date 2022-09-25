import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from 'src/app/models/card';
import { CardModalComponent } from '../card-modal/card-modal.component';

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

  constructor(
    // This dialog variable is created to use for openUpdateCardModule function
    private dialog:MatDialog,
  ) { }

  ngOnInit(): void {
  }
// When the card header is clicked this function will be run and modal will be opened and data will be sent with the clicking to this function. As for data we can get also from here.                @Input() card!:Card; 
  openUpdateCardModule(card:Card):void{
    // Here data property will be sent to the car-modal.component.ts . It will be inject as MAT_DIALOG_DATA
    // @Inject (MAT_DIALOG_DATA) public data:Card
    this.dialog.open(CardModalComponent,{ width:'400px', data:card})
  }
}
