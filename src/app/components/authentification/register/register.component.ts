import { HttpService } from './../../../core/services/api/index';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerificationService } from 'src/app/core/services/data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  categories : {name:string , id : number}[] = [];
  passwordConfirm : string = '';

  user = {
    nom : '',
    prenoms : '',
    telephone : '',
    email : '',
    password : '',
    category_id : '',
  }

  constructor(private location : Location , private api : HttpService , private verification : VerificationService, private router :Router) {

  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  goBack() {
    return this.location.back();
  }

  soumettre(){
    const logVerification  = this.verification.verifyObj(this.user);
    if(logVerification.count> 0)
      return alert("Veuillez remplir tout les champs");

    const passwordVerification = this.verification.verifyPassword({password : this.user.password, passwordConfirm : this.passwordConfirm});
    if(!passwordVerification) {
      return alert("Mot de passe incorrect");
    }

    return this.api.post("user/register", this.user).subscribe(
      {
        next : (response)=>{
            console.log(response);
            if(!!response) {
              this.router.navigate(["auth/login"]);
            }else{
              alert("Erreur de creation veuillez contacter le service IT");
            }
        },
        error : (error)=> {
           console.log(error);
        }
      }
    )

  }

  getAllCategories(){
    this.api.get("category/all").subscribe((response : any)=>{
      console.log(response.data);
      this.categories = response.data  as {name : string , id : number}[];
    });
  }
}
