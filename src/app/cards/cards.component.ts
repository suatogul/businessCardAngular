import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from '../models/card';
import { CardService } from '../services/card.service';
import { CardModalComponent } from './card-modal/card-modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  // If we don't add "!" cards will be give an error, since cards variable is empty
  // the cards varible will be used in the .html file to list the items (it will be written as <div class="col-12 col-md-4 col-lg-3" *ngFor="let card of cards">) here "cards" is our variable which holds the all getData 
  // cards!:Card[]; It is taken  from card.service.ts

  // This is previous data. From here we print to the screen. But now we will get from API
  // cardItem={
  //   title:"Frontend Designer",
  //   name:"Suat",
  //   phone:"077 890 98 98",
  //   email:"example@gmail.com",
  //   address:"Bern"
  // }
  constructor(
    public dialog:MatDialog,
    // From cardService the data will be taken
    public cardService:CardService
  ) { }

  ngOnInit(): void {
    this.cardService.getCards();
  }

  openAddCardModal():void{
    /*
    Normally it was written as below but to use this statement for closing the modal it is assigned a variableas dialog
    this.dialog.open(CardModalComponent, {
      width:'400px'
    });
 */
    this.dialog.open(CardModalComponent, {width:'400px'});
      
    /*  after closing the modal in the card-modal.component.ts with this statement 
   this.dialogRef.close(true);  it should return smt that we can use in subscribe as 'res'
   */
    //   dialog.afterClosed().subscribe(res=>{
    //   if(res){
    //      // After adding new business card (click add button in the modal), it will again run service for getCards() to refresh the list
    //     this.getCards();
    //     console.log("after closing working")
    //   }
    // });
  }

  // There was here getCards function to get data from card service but no need anymore
}
