import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../../services/listing.service';
import { Listing } from '../../../models/listing';
import { UserService } from '../../../services/user.service'; //used to get current user
import { BookingService } from '../../../services/booking.service';
import { User } from '../../../models/user'; //used to get current user
import { NavController } from '@ionic/angular';
import { HttpResponse } from '../../../models/http-response'; // class to tell our http request what the response object should look like
import { Booking } from 'src/app/models/booking';


@Component({
  selector: 'app-listings',
  templateUrl: './listings.page.html',
  styleUrls: ['./listings.page.scss'],
})
export class ListingsPage implements OnInit {

  listings: Listing[];
  test: number;//erm
  currentUser: User = new User();//erm
  allUsers: User[];
  email: string = "";
  password: string = "";

  constructor(private bookingService: BookingService,private listingService: ListingService, private userService: UserService, private navController: NavController) { }

  ngOnInit() {
    // get shared variables
    this.email = this.userService.getEmail();
    this.password = this.userService.getPass();

    this.userService.getUsers().subscribe((response: HttpResponse) => { // get users from api when page loads
      console.log(response);
      if (response.success) { //access to responce.data is only observable in this code block
        this.allUsers = response.data; // if we get data successfully from our api we set our user local variable / object to the data response from the api
        this.currentUser = this.allUsers[this.findCurrentUser(this.email,response.data)];
        this.bookingService.setAllUsers(response.data);
      }
      else {
        alert(response.message); // display error from our http request to the api
      }
    });;

    this.listingService.getListings().subscribe((response: Listing[]) => {
      this.listings = response;
    });;


  }
  
 findCurrentUser(email: string, userArray: User[]): number {
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
        
        return i;
      }
      
    }
    if (!this.currentUser.id) { alert("no user with email: " + email); }
    return -1;
  }


  backToLogin() {
    this.navController.navigateForward('login-page');
  }

  createListing() {
    this.navController.navigateForward('make-listing');
  }

  navToUsers(){
    this.navController.navigateForward('users');
  }

  navToMakeBooking(listing: Listing) {
    this.bookingService.setSelectedListing(listing); // set user to update in UserService - we will read this in our update user page
    this.navController.navigateForward('make-booking') // navigate to our user update page
  }
  navToUserUpdate() {
    this.userService.setUserToUpdate(this.currentUser); // set user to update in UserService - we will read this in our update user page
    this.navController.navigateForward('update-user') // navigate to our user update page
  }
}
