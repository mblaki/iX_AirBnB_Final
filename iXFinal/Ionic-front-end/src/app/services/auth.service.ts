import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // module to perform http request
import { NavController } from '@ionic/angular';
import { HttpResponse } from '../models/http-response'; // class which specifies what our response from the api should look like
import { resolveComponentResources } from '@angular/core/src/metadata/resource_loading';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token: string; // declare our token variable that will hold our token while using the app

  constructor(private http: HttpClient, private navController: NavController) { }

  login(email, password, role){
    this.http.post('http://localhost:5000/api/auth/login', {email: email, password: password}).subscribe((response: HttpResponse) => {
      if (response.success) { // successful http request, same format as HttpResponse model / class
        this.token = response.data; // set our token to the data in the response object
        console.log("response data isssss "+ response.data);
       if(role == 'provider'){
        this.navController.navigateForward('provider-home'); // navigate to the users page
       } else if (role == 'user') {
        this.navController.navigateForward('listings'); // navigate to the users page
       }
        
      }
      else {
        alert(response.message); // display an alert if response has an error
      }
      console.log("Responce object data: " + response.data );
    });
  }

  register(user) {
    this.http.post('http://localhost:5000/api/auth/register', user).subscribe((response: HttpResponse) => {
      if (response.success) { // successful http request, same format as HttpResponse model / class
        this.token = response.data; // set our token to the data in the response object
        this.navController.navigateForward('users'); // navigate to the users page
      }
      else {
        alert(response.message); // display an alert if response has an error 
      }
      console.log(response);
    });
  }

  getToken(): string { // get our token from another service or component in our app

    return this.token
  }

  setTokenToEmpty() {
    this.token = ""; // reset the token to an empty string
  }

}
