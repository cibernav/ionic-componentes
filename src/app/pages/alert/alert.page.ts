import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  titulo: string;
  ngOnInit() {
  }

  async presentInput() {
    const alert = await this.alertCtrl.create({
      header: 'Input',
      subHeader: 'Ingrese su nombre:',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Boton Cancelar');
          }
        },
        {
          text: 'Ok',
          handler: (data) => {
            console.log('Boton Okay', data);
            this.titulo = data.txtNombre;
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Boton Cancelar');
          }
        },
        {
          text: 'Ok',
          handler: (blah) => {
            console.log('Boton Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
