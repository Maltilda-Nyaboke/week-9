import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ApiService } from '../api.service';
import { LandingComponent } from '../landing/landing.component';
import { Repository } from '../repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  username: any;
  userRepos!: any;
  githubUser!: User;

  constructor(private UserService: ApiService,private router: Router) { }

  enter() {
    this.UserService.updateUser(this.username);
    this.UserService.getUsers().subscribe(
      data => {
        this.githubUser = data;
      }
    )
    this.UserService.getRepos().subscribe(
      repo => {
        this.userRepos = repo
      }
    )
    this.router.navigateByUrl('repos')
  }

  ngOnInit(): void {
    this.UserService.getUsers().subscribe(
      data => {
        this.githubUser = data;
        console.log(this.githubUser);
      }
    )
    this.UserService.getRepos().subscribe(
      data => {
        this.userRepos = data;
        console.log(this.userRepos);
      }
    )
  }
  

}
