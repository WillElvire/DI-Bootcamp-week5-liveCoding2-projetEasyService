import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './../../../core/services/api/index';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : any
  constructor(private api : HttpService, private router: Router){
  }
  ngOnInit() {
    return this.api.get("user/all").subscribe(
      {
        next : (response : any )=>{
            console.log(response.data);
          this.users  = response.data
           
        },
        error : (error)=> {
           console.log(error);
        }
      }
    )
  }

  UpdateUser(data:any){
    console.log(data)
    this.router.navigate(['/dash/user/update/', {queryParams:data}])
  }


}
