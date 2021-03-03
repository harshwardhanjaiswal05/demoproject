import { Component } from '@angular/core';
import {isNullOrUndefined} from 'util';
import { google } from '@google/maps';
declare var google: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routemap';
  location:any;
  latitude:any;
  longitude:any;
  listofLocation:any=[];
  
  

   initMap() {
    const myLatLng = { lat: -25.363, lng: 131.044 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatLng,
    });
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
  }


  submitForm(){
   
    console.log(this.location)
    console.log(this.latitude)
    console.log(this.longitude)

    if(!isNullOrUndefined(this.location) || this.location!=""){
      if(!isNullOrUndefined(this.location) || this.location!=""){

        if(!isNullOrUndefined(this.location) || this.location!=""){
           let obj={
             'name':this.location,
             'lat':this.latitude,
             'long':this.longitude
           }
           this.listofLocation.push(obj);
           console.log(this.listofLocation)
        }
      }
    }
  }
}
