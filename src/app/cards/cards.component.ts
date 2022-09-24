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
  cards!:Card[];

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
    private cardService:CardService
  ) { }

  ngOnInit(): void {
    this.getCards();
  }

  openAddCardModal():void{
    // this.dialog.open(CardModalComponent, {
    //   width:'400px'
    // });
    // After adding new business card (click add button in the modal), we want to print it
    const dialog= this.dialog.open(CardModalComponent, {
      width:'400px'
    });
      dialog.afterClosed().subscribe(res=>{
      if(res){
        this.getCards();
        console.log("after closing working")
      }
    });
  }

  getCards(): void{
    this.cardService.getCards()
    .subscribe((res: Card[])=>{
      console.log("res",res);
      this.cards=res;
    }

    )
  }
}
