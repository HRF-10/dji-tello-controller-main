import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.page.html',
  styleUrls: ['./guide.page.scss'],
})
export class GuidePage{

  constructor(private navCtrl: NavController) {}

  closeGuide() {
    this.navCtrl.back(); // Kembali ke halaman sebelumnya
  }

}
