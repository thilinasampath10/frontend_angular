import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output() redirect: EventEmitter<any> = new EventEmitter();
  data: any = 'aaaa';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  changeComponent(url: string) {
    this.redirect.emit(this.data); //emits the data to the parent
    this.router.navigate([url]); //redirects url to new component
  }

  details;
  uname;
  pword;
  isLoggedIn;
  eId;
  //login
  // tslint:disable-next-line:typedef
  public login() {
    axios
      .post('http://localhost/orange_hrm/public/login', {
        username: this.uname,
        password: this.pword,
      })
      .then((response) => {
        this.isLoggedIn = response.data.isLoggedIn;
        this.eId = response.data.eId;

        // Store in session storage
        sessionStorage.setItem('isLoggedIn', this.isLoggedIn);
        sessionStorage.setItem('eId', this.eId);
        sessionStorage.setItem('nav-bar-state', 'true');
        if (this.isLoggedIn) {
          this.router.navigate(['/myinfo/' + this.eId]);
        }
      })
      // tslint:disable-next-line:only-arrow-functions
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
}
