import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CardService } from 'src/app/services/card.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent implements OnInit {
  cardForm!:FormGroup;


  constructor(
    private _snackBar: MatSnackBar,
    private dialogRef:MatDialogRef<CardModalComponent>,
    private fb:FormBuilder,
    private cardService:CardService
  ) { }

  ngOnInit(): void {
    this.cardForm=this.fb.group({
      name:['',Validators.maxLength(50)],
      title:['',[Validators.required, Validators.maxLength(255)]],
      phone:['',[Validators.required, Validators.maxLength(20)]],
      email:['',[Validators.email,, Validators.maxLength(50)]],
      address:['',Validators.maxLength(255)]
    })
  }

  addCard():void{
    console.log("card modal form" + this.cardForm.value);
    // (this.cardForm.value) this is the form data and will be sent service
    this.cardService.addCard(this.cardForm.value)
    .subscribe((res:any)=>{
      console.log(res);
      // this._snackBar.open(message, action);
      this._snackBar.open(res || "New Business Card was added successfuly", "",{duration:4000});
      // this.cardService.getCards();
      this.dialogRef.close(true);
    })
  }

}
