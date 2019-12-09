import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  // Referencia a un elemento html
  @ViewChild(IonSegment, { static: true }) segment: IonSegment;

  superHeroes: Observable<any[]>;
  nombreFiltro: string;

  constructor( private dataService: DataService ) { }

  ngOnInit() {

    this.segment.value = 'todos';
    this.superHeroes = this.dataService.getHeroes();
    this.nombreFiltro = '';
  }


  segmentChanged( evento ) {
    const valorSegmento = evento.detail.value;
    this.nombreFiltro = valorSegmento === 'todos' ? '' : valorSegmento;
    console.log(valorSegmento);

  }

}
