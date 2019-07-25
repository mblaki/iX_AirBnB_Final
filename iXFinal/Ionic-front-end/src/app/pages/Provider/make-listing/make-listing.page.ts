import { Component, OnInit } from '@angular/core';
import { Listing } from 'src/app/models/listing';
import { ListingService } from '../../../services/listing.service';
import { NavController } from '@ionic/angular';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-make-listing',
  templateUrl: './make-listing.page.html',
  styleUrls: ['./make-listing.page.scss'],
})
export class MakeListingPage implements OnInit {
  listing: Listing = new Listing();
  currentUserId:number;
  constructor(private listingService: ListingService, private navController: NavController) { }

  ngOnInit() { }

  createNewListing(){
    console.log("setting hostID as ");
    this.listing.hostId = this.listingService.getCurrentId() ;
    this.listingService.createListing(this.listing);
    this.navController.navigateForward('listings');
  }

  backToHome(){
    this.navController.navigateForward('listings');
  }
  
}
