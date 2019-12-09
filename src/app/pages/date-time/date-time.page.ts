import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();

  customPickerOptions: any;
  customDate: any;

  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: ( evento ) => {
          console.log('Clicked Save!');
          console.log(evento.day.value + '-' + evento.month.value + '-' + evento.year.value);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

  cambioFecha( event: any ) {
    console.log('ionChange', event );
    console.log('Date', new Date( event.detail.value ));
  }

}
