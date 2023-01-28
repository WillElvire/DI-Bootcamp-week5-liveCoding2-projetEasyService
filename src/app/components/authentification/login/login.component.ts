import { HttpService } from './../../../core/services/api/index';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerificationService } from 'src/app/core/services/data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email : '',
    password : ''
  }
  constructor(private location : Location, private api : HttpService , private verification : VerificationService, private router :Router ) {

  }
  goBack() {
    return this.location.back();
  }
  soumettre(){
    const logVerification  = this.verification.verifyObj(this.user);
    if(logVerification.count> 0)
      return alert("Veuillez remplir tout les champs");

    return this.api.post("user/login", this.user).subscribe(
      {
        next : (response : any )=>{
            console.log(response);

            if(response.status == 200) {
              localStorage.setItem("user",JSON.stringify(response))
              this.router.navigate(["/dash"]);
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
}
