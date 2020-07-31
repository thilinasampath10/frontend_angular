import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css'],
})
export class MyInfoComponent implements OnInit {
  ProfileDetails;
  fname;
  lname;
  address;
  eId;
  constructor() {}

  ngOnInit(): void {
    this.eId = sessionStorage.getItem('eId');
    this.getProfiledetails(this.eId);
    var str_navbar_state = sessionStorage.getItem('nav-bar-state');

    if (str_navbar_state === 'true') {
      sessionStorage.setItem('nav-bar-state', 'false');
      location.reload();
    }
  }

  public getProfiledetails(eId) {
    axios
      .post('http://localhost/orange_hrm/public/read', {
        id: eId,
      })
      .then((response) => {
        this.ProfileDetails = response.data;
        this.fname = this.ProfileDetails.fname;
        this.lname = this.ProfileDetails.lname;
        this.address = this.ProfileDetails.address;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
}
