import { DialogRef } from '@angular/cdk/dialog';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {



signupForm!:FormGroup;
formValue!:any

emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
constructor(
  private fb:FormBuilder,
  public dialog: MatDialog,
  private snackBar: MatSnackBar


){

  this.signupForm = this.fb.group({
    name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(12)]],
    email:['',[Validators.required,Validators.email,Validators.pattern(this.emailRegx)]],
    phoneNo:['',[Validators.required,Validators.maxLength(10)]],
    gender:['',Validators.required],
    location:['',Validators.required],
    // terms:[false,Validators.required],
    dob:['',Validators.required],

  })
}

clearform(){
this.signupForm.reset();


}
submitForm(templateReference:any) {
  console.log("console",this.signupForm.value);


  this.snackBar.open('Form submitted successfully', 'Close', {
    duration: 2000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
  });
  this.formValue=this.signupForm.value;
  setTimeout(()=>{
    const dialogRef = this.dialog.open(templateReference, {})
  },2500);




}

}
