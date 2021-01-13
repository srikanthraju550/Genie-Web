import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  Id: string;
  customFields: any;
  checkboxValue: any;
  dropDownValues = [];
  mobile: any;
  location: any;
  price: any;
  title: any;
  description: any;
  selectedfile: any;
  imageSrc: any;
  images = [];
  message: string;
  selectedImagesNames = [];
  selectedImageTypes = [];
  selectedImagesize = [];
  uploadForm: FormGroup;
  files: any;
  imageName: any;
  course_image: any;
  public types = new FormArray([]);
  public names = new FormArray([]);
  public sizes = new FormArray([]);
  public typesa = [];
  public sizesa = [];
  public namesa = []
  public imageContent = [];
  fileToUpload: File = null;
  public textData;
  public dv = [];
  public uniq;
  public readyForSubmit: boolean;
  public searchLocation: any;
  public showEditBtn: boolean;
  states: any;
  cities: any;
  stateId: any;
  cityId: any;
  areaId: any;
  showCity: boolean;
  showArea:boolean;
  showError: boolean;
  areas: any;
  map: google.maps.Map;

  // @ViewChild('mapContainer') public gmap: ElementRef;

  private _mapElement: ElementRef;

@ViewChild("mapContainer", {static: false}) get gmap(): ElementRef { return this._mapElement; }
set gmap(newValue: ElementRef) {
  if (this._mapElement !== newValue) {
    this._mapElement = newValue;
    // Check that newValue is a defined value, and possibly perform actions here.
  }
}

  constructor(private formBuilder: FormBuilder, private _Activatedroute: ActivatedRoute, public appService: AppService) {
    this._Activatedroute.paramMap.subscribe(params => {
      this.Id = params.get('id');
    });

    var ids = this.Id.split(',');
    if (ids.length == 3) {
      this.showEditBtn = true;
    }
  }

  ngOnInit(): void {
    this.getCustomFileds();
    this.getStates();
    this.uploadForm = this.formBuilder.group({
      type: new FormArray([]),
      size: new FormArray([])
    });

    this.appService.getPostData.subscribe(data => {
      console.log('data=====', data);
      this.title = data.name;
      this.description = data.description;
      this.location = data.location;
      this.price = data.price;
      this.mobile = data.mobile;
      this.images.push(data.imagePath + data.display_image);
    });
    this.initAutocomplete();
  }

  getCustomFileds() {
    let params = {
      category_id: this.Id.split(',')[0],
      sub_category_id: this.Id.split(',')[1]
    }
    this.appService.getCustomFields(params).subscribe((response) => {
      this.customFields = response.data;
    }, (error) => {
      alert(error);
    });
  }

  editPost() {


    let fieldIds = [];
    let values = [];
    this.dropDownValues.forEach(fi => {
      fieldIds.push(fi.field_id);
      values.push(fi.value);
    });

    this.dv = this.dv.reverse();
    this.uniq = [...new Set(this.dv.map(({ field_id }) => field_id))].map(e => this.dv.find(({ field_id }) => field_id == e));

    var formData = new FormData();

    fieldIds.forEach(fi => {
      formData.append("field_id[]", fi);
    })

    values.forEach(val => {
      formData.append("value[]", val);
    });

    this.uniq.forEach(u => {
      formData.append("field_id[]", u.field_id);
      formData.append("value[]", u.value);
    });

    this.typesa.forEach(element => {
      formData.append("new_images[]", element, element.name);
    });


    formData.append("category_id", this.Id.split(',')[0]);
    formData.append("sub_category_id", this.Id.split(',')[1]);
    formData.append("title", this.title);
    formData.append("description", this.description);
    formData.append("location", this.location);
    formData.append("mobile_number", this.mobile);
    formData.append("price", this.price);

    this.appService.multiPart('edit_post', formData).subscribe((response) => {
      this.selectedImagesNames = [];
      this.title = '';
      this.description = '';
      this.mobile = '';
      this.price = '';
      fieldIds = [];
      values = [];
      this.images = [];
      this.dv = [];
      this.dropDownValues = [];
    }, (error) => {
      alert(error);
    });
  }

  changeDropDown(eventValue, data) {

    if (data.is_dependency === 'Yes') {
      this.getDependenceData(data.field_id, eventValue);
    }
    if (this.dropDownValues.length > 0) {
      this.dropDownValues.forEach((element, i) => {
        if (element.field_id === data.field_id) {
          element.value = eventValue
        };
      });
    }

    let filteredData = this.dropDownValues.filter(x => x.value == eventValue);
    if (filteredData.length == 0) {
      this.dropDownValues.push({
        field_id: data.field_id,
        value: eventValue
      });
    }
  }

  changeText(data, event) {
    // this.changeDropDown(this.textData, data);
    var xx = this.customFields.find(x => x.field_id === data.field_id);
    this.dv.push({
      field_id: xx.field_id,
      value: event.target.value
    });

  }



  getDependenceData(fId, option) {
    var cData = this.customFields.find(x => x.field_id === fId);
    var oData = cData.field_options.find(y => y.field_option === option);
    let params = {
      field_id: fId,
      option_id: oData.option_id
    }
    this.appService.getDepenceData(params).subscribe((response) => {

      if (fId === response.data.field_order) {
        this.customFields.push(response.data);
      }
      // else {
      //   this.customFields.forEach(element => {
      //     if (element.field_order === fId) {
      //       element = response.data;
      //     }
      //   });
      // }
    }, (error) => {
      alert(error);
    });
  }

  onFileSelect(event: FileList) {
    if (event.length > 0) {
      this.fileToUpload = this.fileValue(event.item(0));
      this.typesa.push(this.fileToUpload);
      this.selectedfile = event.item(0);
      var reader = new FileReader();
      reader.readAsDataURL(this.selectedfile);
      reader.onload = (_event) => {
        this.images.push(reader.result);
      }
    }
  }

  fileValue(fileToUpload: File) {
    return fileToUpload;
  }

  //states

  getStates(){
    this.appService.getStates().subscribe(res=>{
      this.states = res.data;
    })
  }

  changeState(id){
    this.stateId = id;
    this.appService.getCities(id).subscribe(res=>{
      this.showCity=true;
      this.cities = res.data;
    })
  }

  changeCity(id){
    this.cityId = id;
    this.appService.getAreas(id).subscribe(res=>{
      this.showArea=true;
      this.areas = res.data;
    })
  }
  changeArea(id){
    this.areaId = id;
   
  }

  createPost() {
    let fieldIds = [];
    let values = [];
    this.dropDownValues.forEach(fi => {
      fieldIds.push(fi.field_id);
      values.push(fi.value);
    });

    this.dv = this.dv.reverse();
    this.uniq = [...new Set(this.dv.map(({ field_id }) => field_id))].map(e => this.dv.find(({ field_id }) => field_id == e));

    var formData = new FormData();

    fieldIds.forEach(fi => {
      formData.append("field_id[]", fi);
    })

    values.forEach(val => {
      formData.append("value[]", val);
    });

    this.uniq.forEach(u => {
      formData.append("field_id[]", u.field_id);
      formData.append("value[]", u.value);
    });

    this.typesa.forEach(element => {
      formData.append("image[]", element, element.name);
    });

    formData.append("state_id", this.stateId);
    formData.append("city_id", this.cityId);
    formData.append("area_id", this.areaId);

    formData.append("post_id", this.Id.split(',')[2]);
    formData.append("category_id", this.Id.split(',')[0]);
    formData.append("sub_category_id", this.Id.split(',')[1]);
    formData.append("title", this.title);
    formData.append("description", this.description);
    formData.append("location", this.location);
    formData.append("mobile_number", this.mobile);
    formData.append("price", this.price);

    if(this.title===undefined || this.description===undefined || this.location===undefined||this.mobile===undefined ||this.price===undefined){
      this.showError = true;
      return;
    }

    this.appService.multiPart('create_post', formData).subscribe((response) => {
      this.selectedImagesNames = [];
      this.title = '';
      this.description = '';
      this.mobile = '';
      this.price = '';
      fieldIds = [];
      values = [];
      this.images = [];
      this.dv = [];
      this.dropDownValues = [];
    }, (error) => {
      alert(error);
    });
  }

  


  //map
  ngAfterViewInit() {
    setTimeout(() => {
      this.initAutocomplete();
    }, 4000)
  }

   initAutocomplete() {
      this.map = new google.maps.Map(
        this.gmap.nativeElement,
        {
          center: { lat: -33.8688, lng: 151.2195 },
          zoom: 13,
          mapTypeId: "roadmap",
        }
      ); 

    // Create the search box and link it to the UI element.
    const input = document.getElementById("pac-input") as HTMLInputElement;
    const searchBox = new google.maps.places.SearchBox(input);
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  
    // Bias the SearchBox results towards current map's viewport.
    this.map.addListener("bounds_changed", () => {
      searchBox.setBounds(this.map.getBounds() as google.maps.LatLngBounds);
    });
  
    let markers: google.maps.Marker[] = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
  
      if (places.length == 0) {
        return;
      }
  
      // Clear out the old markers.
      markers.forEach((marker) => {
        marker.setMap(null);
      });
      markers = [];
  
      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
      places.forEach((place) => {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        const icon = {
          url: place.icon as string,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };
  
        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            
            title: place.name,
            position: place.geometry.location,
          })
        );
  
        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      this.map.fitBounds(bounds);
    });
  }
  
}
