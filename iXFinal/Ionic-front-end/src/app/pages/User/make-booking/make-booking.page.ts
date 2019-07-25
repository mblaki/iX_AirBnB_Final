import { Component, OnInit } from '@angular/core';
import { Booking } from '../../../models/booking';
import { BookingService } from '../../../services/booking.service'; 
import { NavController } from '@ionic/angular';
import { Listing } from 'src/app/models/listing';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { HttpResponse } from '../../../models/http-response';
import { ListingService } from 'src/app/services/listing.service';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-make-booking',
  templateUrl: './make-booking.page.html',
  styleUrls: ['./make-booking.page.scss'],
})
export class MakeBookingPage implements OnInit {

  constructor(private listingService: ListingService, private bookingService: BookingService, private navController: NavController, private userService: UserService) { }
  booking: Booking = new Booking();
  listing:Listing = new Listing();
  allUsers:User[];
  allListings:Listing[];
  currentUser:User = new User();
  startDate:string;
  endDate:string;
  email:string;
  allHostListings:Listing[];
  i:number = 0;


  ngOnInit() {
   // this.booking= this.bookingService.getSelectedBooking();
   this.email = this.userService.getEmail();
   this.userService.getUsers().subscribe((response: HttpResponse) => { // get users from api when page loads
    console.log(response);

    if (response.success) { //access to responce.data is only observable in this code block
      this.allUsers = response.data; // if we get data successfully from our api we set our user local variable / object to the data response from the api
      this.currentUser = this.userService.findCurrentUser(this.email,response.data);
      // this.bookingService.setAllUsers(response.data);
      this.listing= this.bookingService.getSelectedListing();
    }
    else {
      alert(response.message); // display error from our http request to the api
    }
  });;
  
  this.listingService.getListings().subscribe((response: Listing[]) => {
    this.allListings = response;
    console.log("Hey here are all the listings " + this.allListings.length);
    for (var list in this.allListings) {
      if(this.allListings.hasOwnProperty(list)){
        if(this.listing.hostId == this.allListings[list].hostId ){
          this.i++;
        }
        console.log(list + " = " + this.allListings[list].hostId);
      }
   }
  });;
  }

  //method below needs work
  getAllHostListings(hostId: number){
    console.log("This listing host ID is "+ this.listing.hostId + "  list is " + list);
    for (var list in this.allListings) {
      if(this.allListings.hasOwnProperty(list)){
        if(this.listing.hostId == this.allListings[list].hostId ){
          this.i++;
        }
        console.log(list + " = " + this.allListings[list].hostId);
      }
   }
  }

  createNewBooking(){
    this.booking.listingId= this.listing.id;
    this.booking.dateStart= this.startDate;
    this.booking.dateEnd= this.endDate;
    this.booking.hostId= this.listing.hostId;
    this.booking.userId=this.currentUser.id
    this.booking.status="pending";
    this.bookingService.createBooking(this.booking);
    this.navController.navigateForward('listings');
  }
  navToHome(){
    this.getAllHostListings(1);
    this.navController.navigateForward('listings');
  }
}
