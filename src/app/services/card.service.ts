import { Inject, inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Card } from '../models/card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
// When you have many services, you have to use same api. If you want to change this api you need to change in all services. To prevent this, in the app.module.ts you need to add this
/*   providers: [
  {
    provide:'apiUrl',
    useValue:'http://demo.limantech.com/cards/public/api'
  }
],
*/
//  apiUrl:string="http://demo.limantech.com/cards/public/api/";
  cards!:Card[];
  constructor(
    // To get api address from app.module.ts 
        @Inject('apiUrl') private apiUrl:string,
        private http:HttpClient
        // You need to import HttpClientModule in the app.module.ts
          ) { }
          // To get business cards
// Get cards may give an error in strict mode since it has no return type
// Observable<Card[]> it is the return type
  getCards():void{
  // <Card> data model will be gotten from Card interface. When you send a request from this api, it will get data in an array as Card interface.
    this.http.get<Card[]>(this.apiUrl + '/cards')
    .subscribe((res:Card[])=>{
      this.cards=res;
    })
  }
// (card:Card) card (post data) will be taken from card-modal.components.ts
  addCard(card:Card):Observable<any>{
    return this.http.post(this.apiUrl + '/cards',card)
  }
  updateCard(card:Card,cardId:number):Observable<any>{
    return this.http.put(this.apiUrl + '/cards/' + cardId ,card)
  }
}
