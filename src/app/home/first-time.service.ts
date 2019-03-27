import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class FirstTimeService {
  constructor(private _http: Http) { }
  getData(url) {
    return this._http.get(url).map((res) => {
      return res.json()
    })
  }
  postData(url, formData) {
    return this._http.post(url, formData).map((item) => {
      return item.json();
    }, (err) => {
      console.log(err)
    })
  }
  updateData(url, fromData) {
    return this._http.patch(url, fromData).map((item) => {
      return item.json();
    }, (err) => {
      console.log(err)
    })
  }
  deleteData(url) {
   return this._http.delete(url).map((item) => {
      return item.json();
    }, (err) => {
      console.log(err);
    })
  }
}
 