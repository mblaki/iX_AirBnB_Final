import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service'; // user service which has our user http requests
import { User } from '../../../models/user'; // user model 
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
})
export class UpdateUserPage implements OnInit {

  constructor(private userService: UserService, private navController: NavController) { }

  user: User = new User();

  ngOnInit() { // function runs when page loads
    this.user = this.userService.getUserToUpdate(); // get user from UserService that we want to update
  }

  update() {
    this.userService.updateUser(this.user); // call function from UserService to perform api http request to update user 
  }

  delete() {
    this.userService.invokeCallBack(this.user); // run callback function in our users page to delete user from the list (note: frontend only) 
    this.userService.deleteUser(this.user); // call function from UserService to perform api http request to delete user 
  }

  navToListings(){
    this.navController.navigateForward('listings');
  }
}
