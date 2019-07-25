import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../../services/listing.service'; // user service which has our user http requests
import { Listing } from '../../../models/listing'; // listing model
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-update-listing',
  templateUrl: './update-listing.page.html',
  styleUrls: ['./update-listing.page.scss'],
})
export class UpdateListingPage implements OnInit {

  constructor(private listingService: ListingService) { }

  provider_listing: Listing = new Listing(); //User object for must have role: provider

  ngOnInit() { // function runs when page loads
    this.provider_listing = this.listingService.getProviderListingToUpdate(); // get listing from ListingService that we want to update
  }

  update() {
    this.listingService.updateListing(this.provider_listing); // call function from UserService to perform api http request to update user 
  }

  delete() {
   this.listingService.invokeCallBack(this.provider_listing); // run callback function in our users page to delete user from the list (note: frontend only) 
   this.listingService.deleteListing(this.provider_listing); // call function from UserService to perform api http request to delete user 
  }

}
