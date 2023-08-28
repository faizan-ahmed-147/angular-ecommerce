import { Component, OnInit } from '@angular/core';
import { SignupService } from '../sercices/signup.service';
import { signUp } from 'src/data-type';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
  constructor(private seller: SignupService) {}
  ngOnInit(): void {
  
  }

  signUp(data: signUp): void {
    console.warn(data);
    this.seller.userSignUp(data);
  }
}
