import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login-page', pathMatch: 'full' },
  { path: 'listings', loadChildren: './pages/User/listings/listings.module#ListingsPageModule' },
  { path: 'users', loadChildren: './pages/User/users/users.module#UsersPageModule' },
  { path: 'register', loadChildren: './pages/User/register/register.module#RegisterPageModule' },
  { path: 'update-user', loadChildren: './pages/User/update-user/update-user.module#UpdateUserPageModule' },
  { path: 'login-page', loadChildren: './pages/User/login-page/login-page.module#LoginPagePageModule' },
  { path: 'provider-home', loadChildren: './pages/Provider/provider-home/provider-home.module#ProviderHomePageModule' },
  { path: 'make-listing', loadChildren: './pages/Provider/make-listing/make-listing.module#MakeListingPageModule' },
  { path: 'update-listing', loadChildren: './pages/Provider/update-listing/update-listing.module#UpdateListingPageModule' },
  { path: 'make-booking', loadChildren: './pages/User/make-booking/make-booking.module#MakeBookingPageModule' },
  { path: 'login-provider', loadChildren: './pages/Provider/login-provider/login-provider.module#LoginProviderPageModule' },
  { path: 'register-provider', loadChildren: './pages/Provider/register-provider/register-provider.module#RegisterProviderPageModule' },
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
