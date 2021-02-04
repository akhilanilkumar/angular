import { User } from './../shared/users';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  childInfo:User;
  ngOnInit(): void {
    this.route.parent.data.subscribe(data=>{this.childInfo = data['user']});
  }

}
