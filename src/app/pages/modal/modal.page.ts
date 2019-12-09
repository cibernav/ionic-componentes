import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ThrowStmt } from '@angular/compiler';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Luis',
        pais: 'Peru'
      }
    });

    // invocamos el modal
    await modal.present();

    // recibimos resp del modal en un objeto
    const { data } = await modal.onDidDismiss();

    console.log('Retorno del modal', data);

  }

}
