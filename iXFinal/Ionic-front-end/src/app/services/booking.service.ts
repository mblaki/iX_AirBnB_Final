import { Injectable } from '@angular/core';
import { User } from '../models/user'; // user model
import { Booking } from '../models/booking';
import { Listing } from '../models/listing';
import { HttpResponse } from '../models/http-response'; // class which specifies what our response from the api should look like
import { NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class BookingService {
  bookingSelected: Booking;
  listingSelected: Listing;
  allUsers:User[];
  constructor(private http: HttpClient, private authenticationService: AuthenticationService, private navController: NavController) { }
  httpOptions: { // declare our http options - used to create our http headers which will store our token
    headers: HttpHeaders
  };
  getAllUsers():User[]{
    return this.allUsers;
  }

  setAllUsers(users:User[]){
    this.allUsers =  users;
  }

  setSelectedBooking(booking: Booking) {
    this.bookingSelected = booking; // set the user that we should update in our update user page
  }
  getSelectedBooking():Booking{
    return this.bookingSelected;
  }

  setSelectedListing(listing:Listing){
    this.listingSelected = listing;
  }

  getSelectedListing(){
    return this.listingSelected;
  }
  
  createBooking(new_booking: Booking) {
    this.http.post('http://localhost:5000/api/bookings/add', new_booking ,this.httpOptions).subscribe((response: HttpResponse) => {
      if (response.success) { // successful http request, same format as HttpResponse model / class
        console.log(response.data + "HHHYHYHYH");
        this.navController.navigateForward('listings'); // navigate to the providers home page
      }
      else {
        alert(response.message); // display an alert if response has an error 
      }
      console.log(response);
    });
  }

}
