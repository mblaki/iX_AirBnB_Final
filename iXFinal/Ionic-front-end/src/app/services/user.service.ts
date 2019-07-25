import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // module to perform http request and set http headers
import { AuthenticationService } from './auth.service'; // authentication service which holds our token
import { User } from '../models/user'; // user model
import { NavController } from '@ionic/angular';
import { HttpResponse } from '../models/http-response'; // class which specifies what our response from the api should look like

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userToUpdate: User; // user the our update user page will update
  private callBack: Function; // callback function (deleteUser) that we can call from any page which imports this service 
  public currentUser: User = new User();
  public allUsers: User[];
  private email: string;
  private password: string;
  public hostID:number;
  constructor(private http: HttpClient, private authenticationService: AuthenticationService,
    private navController: NavController) {
    //  this.curr_user = home.email;
  }
  setHostId(n:number){
    this.hostID = n;
  }
  getHostID(){
    return this.hostID;
  }
  setData() {
    this.getUsers().subscribe((response: HttpResponse) => {
      console.log("response length " + response.data.length);
      this.allUsers = response.data;
    });;
  }

  setEmail(e: string) {
    this.email = e;
  }

  setPassword(p: string) {
    this.password = p;
  }
  setCurrentUser(u:User){
    this.currentUser = u;
  }
  getAllUsers(){
    return this.allUsers;
  }
  getcurrentUser(){
    return this.currentUser;
  }
  findCurrentUser(email: string, userArray: User[]):User {
    console.log("userArray length " + userArray.length);
    for (let i = 0; i < userArray.length; i++) {
      if (userArray[i].email == email) {
        let newcurrentUser = {
          id: userArray[i].id,
          name: userArray[i].name,
          surname: userArray[i].surname,
          email: userArray[i].email,
          password: userArray[i].password,
          role: userArray[i].role
        };
        return newcurrentUser;
      }
    }
    if (!this.currentUser.id) { alert("no user with email: " + email); }
    return null;
  }


  getEmail() {
    return this.email;
  }

  getPass() {
    return this.password;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  httpOptions: { // declare our http options - used to create our http headers which will store our token
    headers: HttpHeaders
  };



  getUsers(): any {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.authenticationService.getToken() // get our token from the authentication service and add it the http headers
      })
    };
    return this.http.get('http://localhost:5000/api/users', this.httpOptions); // this returns an observable object which allows which ever function that calls get users to receive the http request for get users 
  }

  setUserToUpdate(user: User) {
    this.userToUpdate = user; // set the user that we should update in our update user page
  }

  getUserToUpdate(): User {
    return this.userToUpdate; // get the user that we should update in our update user page
  }

  setCallBack(callback: Function) {
    this.callBack = callback; // set our callback function (deleteUser)
  }

  invokeCallBack(user) {
    this.callBack(user); // call our callback function (deleteUser) from another page or service
  }

  deleteUser(user: User) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.authenticationService.getToken() // get our token from the authentication service and add it the http headers
      })
    };
    this.http.post('http://localhost:5000/api/users/delete/' + user.id, { userId: user.id }, this.httpOptions).subscribe((response: HttpResponse) => {
      if (response.success) { // successful http request, same format as HttpResponse model / class
        this.navController.navigateForward('login-page'); // navigate to the users page
      }
      else {
        alert(response.message); // display an alert if response has an error 
      }
      console.log(response);
    });
  }

  updateUser(user: User) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.authenticationService.getToken() // get our token from the authentication service and add it the http headers
      })
    };
    this.http.post('http://localhost:5000/api/users/update', user, this.httpOptions).subscribe((response: HttpResponse) => {
      if (response.success) { // successful http request, same format as HttpResponse model / class
        this.navController.navigateForward('listings'); // navigate to the users page
      }
      else {
        alert(response.message); // display an alert if response has an error 
      }
      console.log(response);
    });
  }

}
