import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public registerForm: FormGroup;
  public loginForm: FormGroup;
  @ViewChild('closebutton') closebutton;
  @ViewChild('hideSocialLogin') hideSocialLogin;
  @ViewChild('signupclosebutton') signupclosebutton;
  public submitted = false;
  public loginData;
  public showOtp: boolean;
  public modelOtp;
  errorOtp: boolean;
  public hideLoginbtn: boolean;
  showdropdown: boolean;
  categoryList: any;
  showCat: boolean = false;
  subCategoryList: any;
  showDropDown: boolean;
  locations: any;
  subCatList: any;
  showsubCat: boolean;
  catId: any;
  userData: any;
  userId: any;
  action: any;
  constructor(private formBuilder: FormBuilder, public appService: AppService, public route: Router, private authService: SocialAuthService) { }

  ngOnInit() {



    this.registerForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      address: ['', Validators.required],
      device_id: '1111',
      device_token: 'aaaaaa'
    });

    this.loginForm = this.formBuilder.group({
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      device_id: '1111',
      device_token: 'aaaaaa'
    });
    this.getCategories();

    if (sessionStorage.getItem('user_info') != undefined) {
      this.hideLoginbtn = true;
      this.getLocations();

    }

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  //
  get lf() { return this.loginForm.controls; }


  register() {
    this.submitted = true;
    this.registerForm.value.device_id = '1111',
      this.registerForm.value.device_token = 'aaaaaa'
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.appService.userRegister(this.registerForm.value).subscribe((response) => {
      this.signupclosebutton.nativeElement.click();
      this.registerForm.reset();
      var xx = JSON.parse(response);
      console.log('xx======',xx.data);
      if(this.action === 'register'){
        sessionStorage.setItem('user_info', JSON.stringify(xx.data));
        console.log('sessionStorage===',sessionStorage);
        this.hideLoginbtn = true;
        this.getCategories()
        alert('Logged in Successfully');
        this.getLocations();
        this.route.navigate(['/']);
      }

    }, (error) => {
      alert(error);
    });
  }

  sendOtp() {
    this.submitted = true;
    this.loginForm.value.device_id = '1111';
    this.loginForm.value.device_token = 'aaaaaa';
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.appService.userLogin(this.loginForm.value).subscribe((response) => {
      this.userData = response;
      this.userId = this.userData.user_id;
      this.action = this.userData.action;
      if(this.userData.action=='register'){
        document.getElementById("signupModal").click();
       
      }else{
        this.showOtp = true;
      }
    }, (error) => {
      alert(error);
    });
  }

  login() {

   let params={
    user_id:this.userId,
    device_id:'11111',
    device_token:'aaaaa',
    otp:this.modelOtp
   }

    this.appService.verifyOtp(params).subscribe((response) => {
      this.loginData =response;
      sessionStorage.setItem('user_info', JSON.stringify(this.loginData.data));

      this.closebutton.nativeElement.click();
      this.showOtp = false;
      this.modelOtp = '';
      this.loginForm.reset();
      this.hideLoginbtn = true;
      this.getCategories()
      alert('Logged in Successfully');
      this.getLocations();
      this.route.navigate(['/']);
    }, (error) => {
      alert(error);
    });


    // if (this.loginData.otp === this.modelOtp) {
    //   sessionStorage.setItem('user_info', JSON.stringify(this.loginData.data));
    //   this.closebutton.nativeElement.click();
    //   this.showOtp = false;
    //   this.modelOtp = '';
    //   this.loginForm.reset();
    //   this.hideLoginbtn = true;
    //   this.getCategories()
    //   alert('Logged in Successfully');
    //   this.getLocations();
    //   this.route.navigate(['/']);
    // } else {
    //   this.errorOtp = true;
    // }

  }

  logout() {
    sessionStorage.removeItem('user_info');
    this.route.navigate(['/']);
    this.hideLoginbtn = false;
  }

  getProfile() {
    this.route.navigate(['/myprofile']);
  }

  openDropDown() {
    this.showdropdown = !this.showdropdown;
  }

  loginpopup() {
    this.showOtp = false;
    this.loginForm.reset();
  }

  getCategories() {
    this.appService.getCatAndSubCat().subscribe((response) => {
      this.categoryList = response.data;

    }, (error) => {
      alert(error);
    });
  }

  sellYourProduct() {
    if (sessionStorage.getItem('user_info') != undefined) {
      this.route.navigate(['/post']);
    } else {
      alert('Please Do Login');
    }
  }

  showCategories() {
    this.showCat = !this.showCat;
  }

  signInWithGoogle(): void {
    var params =
    {
      email: '',
      login_type: 2,
      device_id: '11111',
      device_token: 'aaaaaa'
    }
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      params.email = user.email;
      this.socialLogin(params);
    });
  }

  signInWithFB(): void {
    var params =
    {
      email: '',
      login_type: 2,
      device_id: '11111',
      device_token: 'aaaaaa'
    }
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      params.email = user.email;
      this.socialLogin(params);
    });
  }

  socialLogin(params) {
    this.appService.socailLogin(params).subscribe((response) => {
      this.loginData = response;
      sessionStorage.setItem('user_info', JSON.stringify(this.loginData.data));
      this.hideSocialLogin.nativeElement.click();
      this.hideLoginbtn = true;
      this.getCategories()
      alert('Logged in Successfully');
      this.route.navigate(['/']);
    }, (error) => {
      alert(error);
    });
  }

  showProfileMenu() {
    this.showDropDown = !this.showDropDown;
  }

  getLocations() {
    this.appService.getLocation().subscribe(response => {
      this.locations = response.data;
    })
  }

  changeLocation(event) {
    this.appService.updatedDataSelection(event.target.value);
    this.route.navigate(['/product-list', 'location'])
  }

  

  showSubCategories(catId){
    this.catId = catId;
    this.showsubCat = ! this.showsubCat;
    for(var i=0;i<this.categoryList.length;i++){
      if(catId===this.categoryList[i].category_id){
        this.subCatList = this.categoryList[i].sub_categories;
        return;
      }
    }

  }

}