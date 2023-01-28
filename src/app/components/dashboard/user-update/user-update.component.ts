import { HttpService } from './../../../core/services/api/index';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  user = {
    nom : '',
    prenoms : '',
    telephone : '',
    email : '',
    password : '',
    category_id : '',
  }
  categories : {name:string , id : number}[] = [];
  passwordConfirm : string = '';

  constructor(private location : Location , private api : HttpService , private router :Router,private activeRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
    const user=this.activeRoute.snapshot.queryParamMap.get('data')
    console.log(user)
  }

  goBack() {
    return this.location.back();
  }

  soumettre(){

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
