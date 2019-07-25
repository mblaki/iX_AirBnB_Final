import { Component} from '@angular/core';
import { AuthenticationService } from '../../../services/auth.service';
import { NavController } from '@ionic/angular';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user'; // user model
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-login-provider',
  templateUrl: './login-provider.page.html',
  styleUrls: ['./login-provider.page.scss'],
})
export class LoginProviderPage {
  email: string;
  password: string;
  role: string = "provider";
  constructor(private authenticationService: AuthenticationService, private navController: NavController, private userService: UserService) {}
  login() {
    this.userService.setEmail(this.email);
    this.userService.setPassword(this.password);
    this.authenticationService.login(this.email, this.password, this.role);
  }
 
  
  navToProviderHome() {
    this.authenticationService.setTokenToEmpty();
    this.userService.setData();
    console.log("Setting " + this.email+ " " + this.password);
    this.navController.navigateForward('provider-home');
  }
  
  register() {
    this.navController.navigateForward('register-provider');
  }
  
  populateLogin() {
    this.email = "A";
    this.password = "A";
  }
  navToUserLogin(){
    this.navController.navigateForward('login-page');
  }

  navToAdmin(){
    this.navController.navigateForward('users');
  }
  
  }