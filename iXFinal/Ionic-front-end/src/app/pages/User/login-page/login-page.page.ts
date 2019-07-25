import { Component} from '@angular/core';
import { AuthenticationService } from '../../../services/auth.service';
import { NavController } from '@ionic/angular';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user'; // user model
import { TouchSequence } from 'selenium-webdriver';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage{
  email: string;
  password: string;
  role:string = "user"
 
 constructor(private authenticationService: AuthenticationService, private navController: NavController, private userService: UserService) {

 }
 
 login() {
   this.userService.setEmail(this.email);
   this.userService.setPassword(this.password);
   this.authenticationService.login(this.email, this.password, this.role);
 }

 //method not for users but actually for admin
 navToUsers() {
   this.authenticationService.setTokenToEmpty();
   this.userService.setData();
   this.navController.navigateForward('users');
 }
 
 register() {
   this.navController.navigateForward('register');
 }
 
 populateLogin() {
   this.email = "A";
   this.password = "A";
 }
 
 navToProviderLogin(){
  this.navController.navigateForward('login-provider');
 }

 }