import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public toster:any = {};
  public avail: boolean = false;
  public msg: string = "";
  public count :any;
  private baseUri: string = environment.heroku ? "https://appcanteen.herokuapp.com":"http://localhost:3000";
  // private baseUri: string = "http://localhost:3000";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private router: Router) { }

  register(body: any) {
    return this.http.post(this.baseUri+'/register', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  login(body: any) {
    return this.http.post(this.baseUri+'/login', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  setMessage(msg:any,color:any)
  {
    this.toster.msg = msg;
    this.toster.color = color;
    setTimeout(() => {
      this.toster = {};
    }, 4000);
  }

  getMessage()
  {
    return this.toster;
  }
}
