import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

/*
  Generated class for the BeachtypeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BeachTypeProvider {

  apiUrl: String = environment.API_URL;

  constructor(public http: HttpClient) {}

  getBeachTypes() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/beachTypes').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
