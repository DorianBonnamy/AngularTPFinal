import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GithubApiService } from '../GithubApi/github-api.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { PATH_USER, PATH_HOME } from '../app.route-const';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  userList;

  constructor(private route: ActivatedRoute, private apiGithub: GithubApiService, private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params :ParamMap) => {
      this.apiGithub.getUser('user').subscribe(
        data => {
          this.userList = data;
        }
      ),(error)=>{
        this.router.navigate([PATH_HOME]);
      }
    })
    console.log(this.userList);
  }

}
