import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllUsers() {
	console.log("Inside get all users user service");  
	console.log(this.http.get('/api/users'));
    return this.http.get('/api/users').map(res => res.json());
	
  }
}