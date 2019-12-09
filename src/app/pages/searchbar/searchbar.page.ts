import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  
  albumes: any[] = [];
  textoBuscar: string = '';
  
  constructor( private dataService: DataService ) { }

  ngOnInit() {

    this.dataService.getAlbumes().subscribe( albumes => {
      console.log( albumes );
      this.albumes = albumes;
    });
    

  }

  buscar( evento ) {
    // console.log(evento);
    this.textoBuscar = evento.detail.value;

  }


}

// ion-searchbar
// debounce, indica que tiempo debe esperar para lanzar el evento ionChange, 1 seg por defecto.
