import { Component, OnInit } from '@angular/core';
import  { User } from '../../../models/user';
import { AuthenticationService } from '../../../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User = new User();

  constructor(private authenticationService: AuthenticationService, private navController: NavController) { }

  ngOnInit() {
  }

  registerUser() {
    this.user.role = "user";
    this.authenticationService.register(this.user);
  }

  backToLogin() {
    this.navController.back();
  }

}
