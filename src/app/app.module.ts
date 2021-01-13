import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';

import { NgxPaginationModule } from 'ngx-pagination';
import * as $ from "jquery";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AboutComponent } from './components/about/about.component';
import { AdminheaderComponent } from './components/adminheader/adminheader.component';
import { BedsWordrobesComponent } from './components/beds-wordrobes/beds-wordrobes.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { CarsComponent } from './components/cars/cars.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ChatComponent } from './components/chat/chat.component';
import { ComputersComponent } from './components/computers/computers.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CyclesComponent } from './components/cycles/cycles.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { FashionComponent } from './components/fashion/fashion.component';
import { FordendevourComponent } from './components/fordendevour/fordendevour.component';
import { FulltimejobsComponent } from './components/fulltimejobs/fulltimejobs.component';
import { FurnitureComponent } from './components/furniture/furniture.component';
import { GymFitnessComponent } from './components/gym-fitness/gym-fitness.component';
import { HomeAppliancesComponent } from './components/home-appliances/home-appliances.component';
import { HouseAppartmentsComponent } from './components/house-appartments/house-appartments.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { KitchenCookwareComponent } from './components/kitchen-cookware/kitchen-cookware.component';
import { KitchenStorageComponent } from './components/kitchen-storage/kitchen-storage.component';
import { MenComponent } from './components/men/men.component';
import { MobilesComponent } from './components/mobiles/mobiles.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ParttimeJobsComponent } from './components/parttime-jobs/parttime-jobs.component';
import { PostComponent } from './components/post/post.component';
import { PostBikesComponent } from './components/post-bikes/post-bikes.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostCommercialVehiclesComponent } from './components/post-commercial-vehicles/post-commercial-vehicles.component';
import { PostElectronicsComponent } from './components/post-electronics/post-electronics.component';
import { PostHomeappliancesComponent } from './components/post-homeappliances/post-homeappliances.component';
import { PostMobileaccessoriesComponent } from './components/post-mobileaccessories/post-mobileaccessories.component';
import { PostMobilesComponent } from './components/post-mobiles/post-mobiles.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { ScaniaTrucksComponent } from './components/scania-trucks/scania-trucks.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { SofaDiningComponent } from './components/sofa-dining/sofa-dining.component';
import { SparepartsComponent } from './components/spareparts/spareparts.component';
import { SportsHobbiesComponent } from './components/sports-hobbies/sports-hobbies.component';
import { SubscribeWithUsComponent } from './components/subscribe-with-us/subscribe-with-us.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { SupportComponent } from './components/support/support.component';
import { TermsandconditionsComponent } from './components/termsandconditions/termsandconditions.component';
import { ToolsComponent } from './components/tools/tools.component';
import { TrucksComponent } from './components/trucks/trucks.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import {AppService} from './app.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SellerProfileComponent } from './seller-profile/seller-profile.component';
import { SellerProductsComponent } from './seller-products/seller-products.component';
import { ChatUserComponent } from './chat-user/chat-user.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { LatestDealsComponent } from './latest-deals/latest-deals.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    AdminheaderComponent,
    BedsWordrobesComponent,
    BikesComponent,
    CarsComponent,
    ChangePasswordComponent,
    ChatComponent,
    ComputersComponent,
    ContactUsComponent,
    CyclesComponent,
    DisclaimerComponent,
    ElectronicsComponent,
    FashionComponent,
    FordendevourComponent,
    FulltimejobsComponent,
    FurnitureComponent,
    GymFitnessComponent,
    HomeAppliancesComponent,
    HouseAppartmentsComponent,
    JobsComponent,
    KitchenCookwareComponent,
    KitchenStorageComponent,
    MenComponent,
    MobilesComponent,
    MyPostsComponent,
    MyProfileComponent,
    ParttimeJobsComponent,
    PostComponent,
    PostBikesComponent,
    CreatePostComponent,
    PostCommercialVehiclesComponent,
    PostElectronicsComponent,
    PostHomeappliancesComponent,
    PostMobileaccessoriesComponent,
    PostMobilesComponent,
    PrivacypolicyComponent,
    PropertiesComponent,
    ScaniaTrucksComponent,
    SitemapComponent,
    SofaDiningComponent,
    SparepartsComponent,
    SportsHobbiesComponent,
    SubscribeWithUsComponent,
    SubscriptionsComponent,
    SupportComponent,
    TermsandconditionsComponent,
    ToolsComponent,
    TrucksComponent,
    WishlistComponent,
    ProductDetailsComponent,
    SellerProfileComponent,
    SellerProductsComponent,
    ChatUserComponent,
    ProductsListComponent,
    LatestDealsComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    HttpClientModule,
    SocialLoginModule,
    NgxPaginationModule
  ],
  providers: [AppService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              // '774230996819-j86pn92edv9glvicc1d4lm7k73l39htf.apps.googleusercontent.com'
              '774230996819-9dmt7bccmpbu50ce181deib40d4enn2m.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('3040278456199044')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  exports:[],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
