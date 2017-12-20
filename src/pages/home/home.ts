import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  items = [];
  constructor(public navCtrl: NavController) {}
  ionViewDidLoad() {
    this.items = [
      { name: "Dancing", checked: false },
      { name: "Jazz", checked: false },
      { name: "Metal", checked: false },
      { name: "Pop", checked: false },
      { name: "Rock", checked: false },
      { name: "Folk Metal", checked: false }
    ];
  }
  updateCucumber(){
    this.items.forEach((element) => {
      element.checked == true ? element.checked = false : element.checked =  true;
    });
  }
}
