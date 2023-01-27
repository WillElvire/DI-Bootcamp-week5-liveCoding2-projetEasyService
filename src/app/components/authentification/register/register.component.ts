import { HttpService } from './../../../core/services/api/index';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  register = {
    nom : '',
    prenoms : '',
    telephone : '',
    email : '',
    password : '',
    category_id : '',
    category_name : '',
    passwordConfirm : ''
  }

  constructor(private location : Location , private api : HttpService) {

  }

  ngOnInit(): void {

  }

  goBack() {
    return this.location.back();
  }

  soumettre(){

  }

  getAllCategories(){
    this.api.get("")
  }
}
