import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  // users: Observable<User[]> | undefined;

  userId:any;
  users=[{
    id:'',
    name:'',
    email:'',
    about:''
    }]
  


  constructor(private userService:UserServiceService, private activeRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.userId = this.activeRoute.snapshot.params['id'];
    this.reloadData();
  }

  reloadData() {
    this.userService.getUserList().subscribe(
      (data : any)=>{
        this.users=data
        console.log(this.users)
      },(error)=>{
        console.log(error)
      }
      )
  }

  deleteUser(userId: any) {
   
    Swal.fire({
      icon:'info',
      title:"Are You Sure, want to delete this User?",
      confirmButtonText:'DELETE',
      showCancelButton:true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(userId).subscribe(
          (data:any)=>{
            console.log(data)
            Swal.fire("Success","User Deleted Successfuly",'success')
            this.users=this.users.filter((u)=>u.id !=userId)

          },(error)=>{
            console.log(error)
            Swal.fire("Error","Something went wrong",'error')

          })
        }
    })
  
  }

  userDetails(id: any){
    this.router.navigate(['details', id]);
  }

  updateuser(id:any){
    this.router.navigate(['update',id])
  }
}
