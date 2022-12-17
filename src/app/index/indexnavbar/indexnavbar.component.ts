import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-indexnavbar',
  templateUrl: './indexnavbar.component.html',
  styleUrls: ['./indexnavbar.component.css']
})
export class IndexnavbarComponent implements OnInit {

  public errorMessage: any;
  public styl: any;
  myurl: any;
  constructor( private router: Router,private auth:AuthService) { }

  ngOnInit(): void {
    if(this.auth.getMessage()) {
      var x = this.auth.getMessage();
      this.setMessage(x.msg, x.color)
    }
  }
  
  setMessage(msg: any, color: any) {
    this.errorMessage = msg;
    this.styl = {
      backgroundColor: color,
    }
    setTimeout(() => {
      this.errorMessage = null;
    }, 4000);

    this.myurl = this.router.url;
    if(this.myurl == "/#food") {
      setTimeout(() => {
        document.body.scrollTop = document.getElementById('food').offsetTop;
        document.documentElement.scrollTop = document.getElementById('food').offsetTop;
      }, 100);

    }
  }
  gotoFood() {
      setTimeout(() => {
        document.body.scrollTop = document.getElementById('food').offsetTop;
        document.documentElement.scrollTop = document.getElementById('food').offsetTop;
      }, 100);
  }
}
