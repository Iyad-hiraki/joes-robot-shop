import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  user: IUser | null = null;
  showSignOutMenu: boolean = false ;
  constructor(private userScv: UserService) { }

  ngOnInit(): void {
    this.userScv.getUser().subscribe({
      next: (user) => { this.user = user }
    })
  }

  toggleSignOutMenu(){
    this.showSignOutMenu = !this.showSignOutMenu
  }

  signOut(){
    this.userScv.signOut();
    this.showSignOutMenu = false;
  }
}
