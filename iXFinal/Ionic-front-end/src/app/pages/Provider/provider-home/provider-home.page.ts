import { Component, OnInit } from '@angular/core';
import { Listing } from 'src/app/models/listing';
import { User } from 'src/app/models/user';
import { BookingService } from 'src/app/services/booking.service';
import { ListingService } from 'src/app/services/listing.service';
import { UserService } from 'src/app/services/user.service';
import { NavController } from '@ionic/angular';
import { HttpResponse } from '../../../models/http-response';

@Component({
  selector: 'app-provider-home',
  templateUrl: './provider-home.page.html',
  styleUrls: ['./provider-home.page.scss'],
})
export class ProviderHomePage implements OnInit {
  allListings: Listing[];
  hostListings: Listing[]=[];
  test: number;//erm
  currentUser: User = new User();//erm
  allUsers: User[];
  email: string = "";
  password: string = "";
  hostID:number;
  i:number;
  constructor(private bookingService: BookingService,private listingService: ListingService, private userService: UserService, private navController: NavController) { 
    this.listingService.setCallBack(this.deleteListing);
  }
  deleteListing = (userToDelete) => { // call back to update local list of users on the frontend / client. Otherwise our database would update and our list on this page would still show the user
    this.allListings = this.allListings.filter(user => user.id !== userToDelete.id);
  }
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
        this.hostID = this.currentUser.id;
      }
      else {
        alert(response.message); // display error from our http request to the api
      }
    });;

    this.listingService.getListings().subscribe((response: Listing[]) => {
      this.allListings = response;

      
      for (var list in this.allListings) {
        if(this.allListings.hasOwnProperty(list)){
          if(this.hostID == this.allListings[list].hostId ){
            this.i++;
            this.hostListings.push(this.allListings[list]);
          }
          console.log(list + " = " + this.allListings[list].hostId);
        }
     }
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
    this.navController.navigateForward('login-provider');
  }

  createListing() {
    this.navController.navigateForward('make-listing');
  }

  navToUsers(){
    this.navController.navigateForward('users');
  }

  //not for hosts
  navToEditListing(listing: Listing) {
    this.listingService.setSelectedListing(listing); // set user to update in UserService - we will read this in our update user page
    this.navController.navigateForward('update-listing') // navigate to our user update page
  }

  navToUserUpdate() {
    this.userService.setUserToUpdate(this.currentUser); // set user to update in UserService - we will read this in our update user page
    this.navController.navigateForward('update-user') // navigate to our user update page
  }
}
