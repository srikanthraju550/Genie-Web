import { PostMobileaccessoriesComponent } from './components/post-mobileaccessories/post-mobileaccessories.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
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
import { JobsComponent } from './components/jobs/jobs.component';
import { KitchenCookwareComponent } from './components/kitchen-cookware/kitchen-cookware.component';
import { KitchenStorageComponent } from './components/kitchen-storage/kitchen-storage.component';
import { MenComponent } from './components/men/men.component';
import { MobilesComponent } from './components/mobiles/mobiles.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ParttimeJobsComponent } from './components/parttime-jobs/parttime-jobs.component';
import { PostComponent } from './components/post/post.component';
import { PostBikesComponent } from './components/post-bikes/post-bikes.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostCommercialVehiclesComponent } from './components/post-commercial-vehicles/post-commercial-vehicles.component';
import { PostElectronicsComponent } from './components/post-electronics/post-electronics.component';
import { PostHomeappliancesComponent } from './components/post-homeappliances/post-homeappliances.component';
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
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SellerProfileComponent } from './seller-profile/seller-profile.component';
import { SellerProductsComponent } from './seller-products/seller-products.component';
import { ChatUserComponent } from './chat-user/chat-user.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { LatestDealsComponent } from './latest-deals/latest-deals.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'bikes',
    component: BikesComponent
  },
  {
    path: 'cars',
    component: CarsComponent
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'computers',
    component: ComputersComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'cycles',
    component: CyclesComponent
  },
  {
    path: 'disclaimer',
    component: DisclaimerComponent
  },
  {
    path: 'electronics',
    component: ElectronicsComponent
  },
  {
    path: 'fashion',
    component: FashionComponent
  },
  {
    path: 'fordendevour',
    component: FordendevourComponent
  },
  {
    path: 'furniture',
    component: FurnitureComponent
  },
  {
    path: 'fulltimejobs',
    component: FulltimejobsComponent
  },
  {
    path: 'gym-fitness',
    component: GymFitnessComponent
  },
  {
    path: 'home-appliances',
    component: HomeAppliancesComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'kitchen-cookware',
    component: KitchenCookwareComponent
  },
  {
    path: 'kitchen-storage',
    component: KitchenStorageComponent
  },
  {
    path: 'men',
    component: MenComponent
  },
  {
    path: 'mobiles',
    component: MobilesComponent
  },
  {
    path: 'myposts',
    component: MyPostsComponent
  },
  {
    path: 'myprofile',
    component: MyProfileComponent
  },
  {
    path: 'parttime-jobs',
    component: ParttimeJobsComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'post-bikes',
    component: PostBikesComponent
  },
  {
    path: 'create-post/:id',
    component: CreatePostComponent
  },
  {
    path: 'post-commercial-vehicles',
    component: PostCommercialVehiclesComponent
  },
  {
    path: 'post-electronics',
    component: PostElectronicsComponent
  },
  {
    path: 'post-homeappliances',
    component: PostHomeappliancesComponent
  },
  {
    path: 'post-mobileaccessories',
    component: PostMobileaccessoriesComponent
  },
  {
    path: 'post-mobiles',
    component: PostMobilesComponent
  },
  {
    path: 'privacypolicy',
    component: PrivacypolicyComponent
  },
  {
    path: 'properties',
    component: PropertiesComponent
  },
  {
    path: 'scania-trucks',
    component: ScaniaTrucksComponent
  },
  {
    path: 'sitemap',
    component: SitemapComponent
  },
  {
    path: 'sofa-dining',
    component: SofaDiningComponent
  },
  {
    path: 'spareparts',
    component: SparepartsComponent
  },
  {
    path: 'sports-hobbies',
    component: SportsHobbiesComponent
  },
  {
    path: 'subscribe-with-us',
    component: SubscribeWithUsComponent
  },
  {
    path: 'subscriptions',
    component: SubscriptionsComponent
  },
  {
    path: 'support',
    component: SupportComponent
  },
  {
    path: 'termsandconditions',
    component: TermsandconditionsComponent
  },
  {
    path: 'trucks',
    component: TrucksComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
  {
    path:'prod-details/:id',
    component:ProductDetailsComponent
  },
  {
    path:'seller-profile/:id',
    component:SellerProfileComponent
  },
  {
    path:'seller-products/:id',
    component:SellerProductsComponent
  },

  {
    path:'get-chat/:id',
    component:ChatUserComponent
  },
  {
    path:'product-list/:id',
    component:ProductsListComponent
  },
  {
    path:'latest-deals/:action',
    component:LatestDealsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
