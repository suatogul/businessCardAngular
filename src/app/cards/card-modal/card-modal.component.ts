import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/models/card';
import { SnackbarService } from 'src/app/services/snackbar.service';
@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent implements OnInit {

  cardForm!:FormGroup;
  showSpinner:boolean=false;
  constructor(
    private snackBarService:SnackbarService,
    // This is the reference of the opened model
    private dialogRef:MatDialogRef<CardModalComponent>,
    private fb:FormBuilder,
    private cardService:CardService,
// MAT_DIALOG_DATA will be imported, data is a variable and Card is the interface
// The data will be taken with the function this.dialog.open(CardModalComponent,{ width:'400px', data:card})
//Step-1: After clicked the card-header the modal is opened. And the inputs must fill with the same data as clicked card-header 
    @Inject (MAT_DIALOG_DATA) public data:Card
  ) { }

  ngOnInit(): void {
    console.log(this.data)
    this.cardForm=this.fb.group({
      name:[this.data?.name || '',Validators.maxLength(50)],
      title:[this.data?.title || '',[Validators.required, Validators.maxLength(255)]],
      phone:[this.data?.phone || '',[Validators.required, Validators.maxLength(20)]],
      email:[this.data?.email || '',[Validators.email,, Validators.maxLength(50)]],
      address:[this.data?.address || '',Validators.maxLength(255)]
    })
  }

  addCard():void{
    this.showSpinner=true;
    // (this.cardForm.value) this is the form data and will be sent service
    this.cardService.addCard(this.cardForm.value)
      .subscribe({
        next:(res:any)=>{this.getSuccess(res || "Business Card was added successfuly")},
        error:(err:any)=>{this.getError(err.message || "There is a problem while adding business card!")}
      })
  }
// Writing way of "Subscribe" as in update card is depricated so it should be changed as addCard
  updateCard():void{
    this.showSpinner=true;
      this.cardService.updateCard(this.cardForm.value,this.data.id)
      .subscribe((res:any)=> {
        this.getSuccess(res || "Business Card was edited successfuly")
      },(err:any)=>{
        this.getError(err.message || "There is a problem while updating business card!");
      });
  }

  deleteCard():void{
    this.showSpinner=true;
    this.cardService.deleteCard(this.data.id)
    .subscribe((res:any)=>{
      this.getSuccess(res || "Business Card was deleted successfuly")
    },(err:any)=>{
      this.getError(err.message || "There is a problem while deleting business card!");
    })
  }

  getSuccess(message:string):void{
        // this._snackBar.open(message, action); message will be res and action is ""
    this.snackBarService.createSnackbar("success",message)
    this.cardService.getCards();
    this.showSpinner=false;
//this.dialogRef.close(); This statement is closing the opened modal 
    this.dialogRef.close();
  }

  getError(message:string){
    this.snackBarService.createSnackbar("error",message)
    this.showSpinner=false;
  }
  
}