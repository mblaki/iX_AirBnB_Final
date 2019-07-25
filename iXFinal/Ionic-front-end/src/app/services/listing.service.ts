import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // module to perform http request and set http headers
import { AuthenticationService } from './auth.service'; // authentication service which holds our token
import { Listing } from '../models/listing'; // listing model
import { HttpResponse } from '../models/http-response'; // class which specifies what our response from the api should look like
import { NavController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ListingService {
  listingToUpdate: Listing; //listing to update in update listing page
  currentUserId: number;
  listingSelected:Listing;
  private callBack: Function;
  httpOptions: { // declare our http options - used to create our http headers which will store our token
    headers: HttpHeaders
  };

  constructor(private http: HttpClient, private authenticationService: AuthenticationService, private navController: NavController) {
   
  }

  getListings(): any {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.authenticationService.getToken() // get our token from the authentication service and add it the http headers
      })
    };
    return this.http.get('http://localhost:5000/api/listings', this.httpOptions); // this returns an observable object which allows which ever function that calls get users to receive the http request for get listings 
  }

  updateListing(listing: Listing) {
    this.http.post('http://localhost:5000/api/listings/update', listing ,this.httpOptions).subscribe((response: HttpResponse) => {
      if (response.success) { // successful http request, same format as HttpResponse model / class
        this.navController.navigateForward('provider-home'); // navigate to the provider home page
      }
      else {
        alert(response.message); // display an alert if response has an error 
      }
      console.log(response);
    });
  }

  createListing(new_listing: Listing) {
    this.http.post('http://localhost:5000/api/listings/create', new_listing ,this.httpOptions).subscribe((response: HttpResponse) => {
      if (response.success) { // successful http request, same format as HttpResponse model / class
        this.navController.navigateForward('provider-home'); // navigate to the providers home page
      }
      else {
        alert(response.message); // display an alert if response has an error 
      }
      console.log(response);
    });
  }

  // This method might need changing, use when you wana find listingId
  getProviderListing(listingId: Listing){
    return this.http.get('http://localhost:5000/api/listings/'+listingId, this.httpOptions).subscribe((response: HttpResponse) => {
      if (response.success) { // successful http request, same format as HttpResponse model / class
        this.navController.navigateForward('provider-home'); // navigate to the providers home page
      }
      else {
        alert(response.message); // display an alert if response has an error 
      }
      console.log(response);
  });
}
getProviderListingToUpdate(){
return this.listingSelected;
}

setListingToUpdate(listing: Listing) {
  this.listingSelected = listing; // set the listing that we should update in our update listing page
}

getListingToUpdate(): Listing {
  return this.listingToUpdate; // get the listing that we should update in our update listing page
}

setCurrentId(id:number){
  this.currentUserId = id;
}
getCurrentId():number{
   return this.currentUserId;
}

setSelectedListing(listing:Listing){
  this.listingSelected = listing;
}

getSelected():Listing{
  return this.listingSelected;
}

setCallBack(callback: Function) {
  this.callBack = callback; // set our callback function (deleteUser)
}

invokeCallBack(user) {
  this.callBack(user); // call our callback function (deleteUser) from another page or service
}

deleteListing(list: Listing) {
  this.httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.authenticationService.getToken() // get our token from the authentication service and add it the http headers
    })
  };
  this.http.post('http://localhost:5000/api/users/delete/' + list.id, { userId: list.id }, this.httpOptions).subscribe((response: HttpResponse) => {
    if (response.success) { // successful http request, same format as HttpResponse model / class
      this.navController.navigateForward('provider-home'); // navigate to the users page
    }
    else {
      alert(response.message); // display an alert if response has an error 
    }
    console.log(response);
  });
}

}
