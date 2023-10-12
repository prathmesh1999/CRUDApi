import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  userId:any
  // users!: User;
  user: User = new User();
  submitted = false;


  constructor(private userService:UserServiceService,private _route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.submitted = false;
    this.userId=this._route.snapshot.params['id'];
    this.userService.getUserById(this.userId).subscribe(
      (data:any)=>{
        this.user=data
      },(error)=>{
        console.log(error)
      }
      )
    
  }

  updateUser(){
    this.userService.updateUser(this.userId,this.user).subscribe(
      (data:any)=>{
        this.user=data;
        console.log(this.user);
        this.gotoList();
      },(error)=>{
        console.log(error);
      }
    )

  }

  onSubmit() {
    this.submitted = true;
    this.updateUser();    
  }
  
  gotoList() {
    this.router.navigate(['/users']);
  }
}
