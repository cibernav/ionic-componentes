import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverinfoComponent } from 'src/app/components/popoverinfo/popoverinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( private popoverCtrl: PopoverController ) { }

  ngOnInit() {
  }

  async mostrarPop( evento ) {

    const popover = await this.popoverCtrl.create({
      component: PopoverinfoComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: false
    });

    await popover.present();

    // Se ejecuta cuando se cierra el popover y espera un resultado
    // const { data } = await popover.onDidDismiss();
    // Se ejecuta antes de cerrar el popover, a hacer click
    const { data } = await popover.onWillDismiss();

    console.log('Padre: ', data);

  }

}
