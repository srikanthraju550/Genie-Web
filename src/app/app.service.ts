import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {

  }

  // public baseUrl = 'https://cors-anywhere.herokuapp.com/https://geniemarket.in/admin/';

  // public baseUrl1 = 'https://cors-anywhere.herokuapp.com/https://geniemarket.in/admin/api/user_web/';

  public baseUrl = 'https://geniemarket.in/admin/';

  public baseUrl1 = 'https://geniemarket.in/admin/api/user_web/';

  public dataSource = new BehaviorSubject<any>('');
  data = this.dataSource.asObservable();


  updatedDataSelection(data) {
    this.dataSource.next(data);
  }

  public getPostData = new BehaviorSubject<any>({});
  pData = this.getPostData.asObservable();

  getEditPostData(pData) {
    this.getPostData.next(pData);
  }

  getHomeContent(): Observable<any> {
    return this.callServices1('home_screen_content', null);
  }

  userRegister(data): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    });
    return this.http.post(this.baseUrl + '/user_register', data, { headers, responseType: 'text' });
  }

  userLogin(data): Observable<any> {
    return this.callServices('send_otp', data);
  }

  verifyOtp(data): Observable<any> {
    return this.callServices('verify_otp', data);
  }

  socailLogin(data): Observable<any> {
    return this.callServices('social_login', data);
  }


  getProfile(): Observable<any> {
    return this.callServices('user_profile', null);
  }


  editProfile(data): Observable<any> {
    return this.callMultipart('user_edit_profile', data);
  }

  getCategories(): Observable<any> {
    return this.callServices1('category_list', null);
  }

  getProductDetails(data): Observable<any> {
    // return this.callSapService2('product_details', data);
    var headers;
    headers = new HttpHeaders({
      'Content-Type': "application/x-www-form-urlencoded",

    });
    let options = { headers: headers };
    return this.http.post(this.baseUrl1 + 'product_details', data, options);
  }


  getSubCategories(catid): Observable<any> {
    return this.callServices1('sub_category_list' + '?category_id=' + catid, null);
  }


  getCustomFields(data): Observable<any> {
    return this.callServices('custom_fields_list', data);
  }

  getModalsbyBrand(data): Observable<any> {
    return this.callServices('models_by_brand_id', data);
  }

  getAddBanners(): Observable<any> {
    return this.callServices('ad_banners', null);
  }

  getMyPost(): Observable<any> {
    return this.callServices('my_posts', null);
  }

  deletePost(data): Observable<any> {
    return this.callServices('delete_post', data);
  }

  editPost(data): Observable<any> {
    return this.callServices('edit_post', data);
  }

  

  addWishList(data): Observable<any> {
    return this.callServices('update_wishlist', data);
  }

  getWishList(): Observable<any> {
    return this.callServices('wishlist', null);
  }

  deleteWishList(data): Observable<any> {
    return this.callServices('delete_wishlist', data);
  }

  sendMessage(data): Observable<any> {
    return this.callServices('send_message', data);
  }

  getChatList(): Observable<any> {
    return this.callServices('chat_list', null);
  }

  getContent(): Observable<any> {
    return this.callServices2('content', null);
  }

  getSupportData(): Observable<any> {
    return this.callServices('support', null);
  }

  getSellerProfile(data): Observable<any> {
    return this.callSapService2('seller_profile', data);
  }

  getSellerProducts(): Observable<any> {
    return this.callServices('seller_products', null);
  }

  markAsSold(data): Observable<any> {
    return this.callServices('mark_as_sold', data);
  }

  readChat(data): Observable<any> {
    return this.callServices('read_chat', data);
  }

  chatResponses(data): Observable<any> {
    return this.callServices('chat_responses', data);
  }

  deleteChat(data): Observable<any> {
    return this.callServices('delete_chat', data);
  }

  reportAdKeywords(): Observable<any> {
    return this.callServices('report_ad_keywords', null);
  }

  reportAd(data): Observable<any> {
    return this.callServices('report_ad', data);
  }

  getProductsList(data): Observable<any> {
    return this.callSapService2('product_list', data);
  }

  getLocation(): Observable<any> {
    return this.callServices('locations', null);

  }

  getLatestDeals(): Observable<any> {
    return this.callServices('latest_deals', null);
  }

  getRecommanded(): Observable<any> {
    return this.callSapService2('related_products', null);
  }

  getCatAndSubCat(): Observable<any> {
    return this.callServices1('categories_and_sub_categories', null);


  }

  getDepenceData(data):Observable<any>{
    return  this.callServices('dependency_data',data);
  }

  getStates():Observable<any>{
    return  this.callServices2('states_list',null);
  }

  getCities(id):Observable<any>{
    return  this.callServices2('cities_list' + '?state_id' + id,null);
  }

  getAreas(id):Observable<any>{
    return  this.callServices2('area_list' + '?city_id' + id,null);
  }

  getLocationProducts(data):Observable<any>{
    return  this.callServices('product_list_by_location' , data);
  }

  getAllRecommanded():Observable<any>{
    return this.callServices('recommended_deals',null);
  }

  public callServices(methodeName, params) {
    var headers;

    if (methodeName === 'send_otp' || methodeName === 'social_login' || methodeName === 'verify_otp') {
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      let options = { headers: headers };
      return this.http.post(this.baseUrl + methodeName, params, options);
    } else {
      var userinfo = JSON.parse(sessionStorage.getItem('user_info'));
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Userid': userinfo.user_id,
        'Token': userinfo.user_token,
      });
      let options = { headers: headers };
      return this.http.post(this.baseUrl + methodeName, params, options);
    }
  }

  public callServices1(methodeName, params) {
    var headers;

    headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };

    return this.http.get(this.baseUrl1 + methodeName, options);
  }

  public callServices2(methodeName, params) {
    var headers;

    headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };

    return this.http.get(this.baseUrl + methodeName, options);
  }

  public callServices3(methodeName, params) {
    var headers;
      var userinfo = JSON.parse(sessionStorage.getItem('user_info'));
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Userid': userinfo.user_id,
        'Token': userinfo.user_token,
      });
      let options = { headers: headers };
      return this.http.get(this.baseUrl + methodeName, params);
    
  }



  public callMultipart(methodeName, params) {
    var headers;
    var userinfo = JSON.parse(sessionStorage.getItem('user_info'));
    var headers;
    headers = new HttpHeaders({
      // 'Content-Type': "multipart/form-data",
      // 'Content-Type': "application/x-www-form-urlencoded",
      // 'Content-Type': undefined,

      'Userid': userinfo.user_id,
      'Token': userinfo.user_token,
    });
    let options = { headers: headers };
    return this.http.post(this.baseUrl + methodeName, params, options
    );

  }

  public callSapService2(methodeName, params) {
    var headers;
    var headers;
    headers = new HttpHeaders({
      'Content-Type': "application/json",

    });
    let options = { headers: headers };
    return this.http.post(this.baseUrl1 + methodeName, params, options);

  }


 

  multiPart(methode,data): Observable<any> {
  var headers;
  var userinfo = JSON.parse(sessionStorage.getItem('user_info'));

    headers = new HttpHeaders({
      'Userid': userinfo.user_id,
      'Token': userinfo.user_token,
    });
    let options = { headers: headers };
  return this.http
    .post(this.baseUrl + methode, data,options)
    .map((response) => { return response; })
    .catch((e) =>  e);
}

}
