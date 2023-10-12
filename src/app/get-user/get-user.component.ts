import { Component, OnInit,Input  } from '@angular/core';

import { UserServiceService } from '../user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {

  userId:any;
  users!: User;

  constructor(private userService:UserServiceService,private _route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.userId=this._route.snapshot.params['id'];
    this.userService.getUserById(this.userId).subscribe(
      (data:any)=>{
        this.users=data
        console.log(data)
      },(error)=>{
        console.log(error)
      }
    )
  }

 
    
  
  list(){
    this.router.navigate(['users']);
  }

}
