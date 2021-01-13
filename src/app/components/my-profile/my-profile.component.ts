import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  public editForm: FormGroup;
  user_image: any;
  selectedfile: any;
  message: string;
  constructor(public appService: AppService, private formBuilder: FormBuilder,) { }
  public userInfo;
  public userData: any;
  public submitted = false;
  public editedData: any;
  public genders = ['Gender', 'Male', 'Female'];
  public imageFile;
  fileToUpload: File = null;

  ngOnInit(): void {
    console.log('sessionStorage.getItem(user_info)====',sessionStorage.getItem('user_info'));
    var userinfo = JSON.parse(sessionStorage.getItem('user_info'));

    this.getUserProfile();
    this.editForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['',],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      address: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      user_id: [userinfo.user_id],
    });
  }

  get ef() { return this.editForm.controls; }


  getUserProfile() {
    var userinfo = JSON.parse(sessionStorage.getItem('user_info'));
    this.appService.getProfile().subscribe(response => {
      this.userData = response.data;
      this.user_image = this.userData.image == '' ? '' : response.image_path + '/' + this.userData.image;
      this.editForm.patchValue({
        first_name: this.userData.first_name,
        last_name: this.userData.last_name,
        mobile: this.userData.mobile,
        address: this.userData.address,
        email: this.userData.email,
        gender: this.userData.gender,
        dob: this.userData.dob,
        user_id: userinfo.user_id,
      });
    });
  }

  editProfile() {
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }

    this.editForm.value.first_name = this.editForm.value.first_name != undefined ? this.editForm.value.first_name : ' ';
    this.editForm.value.last_name = this.editForm.value.last_name != undefined ? this.editForm.value.last_name : '';
    this.editForm.value.mobile = this.editForm.value.mobile != undefined ? this.editForm.value.mobile : '';
    this.editForm.value.address = this.editForm.value.address != undefined ? this.editForm.value.address : ''
    this.editForm.value.email = this.editForm.value.email != undefined ? this.editForm.value.email : ''
    this.editForm.value.gender = this.editForm.value.gender != undefined ? this.editForm.value.gender : ''
    this.editForm.value.dob = this.editForm.value.dob != undefined ? this.editForm.value.dob : ''
    this.editForm.value.user_id = this.editForm.value.user_id != undefined ? this.editForm.value.user_id : ''
    this.selectedfile = this.selectedfile == undefined ? '' : this.selectedfile;

    

      var fd = new FormData();
      fd.append('first_name', this.editForm.value.first_name);
      fd.append('last_name', this.editForm.value.last_name);
      fd.append('mobile', this.editForm.value.mobile);
      fd.append('address', this.editForm.value.address);
      fd.append('email', this.editForm.value.email);
      fd.append('gender', this.editForm.value.gender);
      fd.append('dob', this.editForm.value.dob);
      fd.append('user_id', this.editForm.value.user_id);
      fd.append('image', this.fileToUpload, this.fileToUpload.name);


    this.appService.multiPart('user_edit_profile',fd).subscribe(response => {
      this.editedData = response.data;
      this.editForm.patchValue({
        first_name: this.editedData.first_name,
        last_name: this.editedData.last_name,
        mobile: this.editedData.mobile,
        address: this.editedData.address,
        email: this.editedData.email,
        gender: this.editedData.gender,
        dob: this.editedData.dob
      });
    });
  }
  chooseImage1(files) {

    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.user_image = reader.result;
    }

    this.selectedfile = files[0].name;
    // if (event.target.files.length > 0) {
    //   this.selectedfile = event.target.files[0].name;


    // }  
  }

  chooseImage(event: FileList) {

    if (event.length === 0)
      return;

    if (event.length > 0) {
      this.fileToUpload = this.fileValue(event.item(0));
      this.selectedfile = event.item(0);

      var reader = new FileReader();
      reader.readAsDataURL(this.selectedfile);
      reader.onload = (_event) => {
        this.user_image  = reader.result;
      }
    }
  }

  fileValue(fileToUpload: File) {
    return fileToUpload;
  }
}
