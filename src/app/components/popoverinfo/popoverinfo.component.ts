import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popoverinfo',
  templateUrl: './popoverinfo.component.html',
  styleUrls: ['./popoverinfo.component.scss'],
})
export class PopoverinfoComponent implements OnInit {

  items = Array(40);

  constructor( private popoverCtrl: PopoverController ) { }

  ngOnInit() {}


  onClick( valor: number ) {

    console.log('item: ', valor);

    this.popoverCtrl.dismiss({
      item: valor
    });
  }

}
