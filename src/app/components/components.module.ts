import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { PopoverinfoComponent } from './popoverinfo/popoverinfo.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    PopoverinfoComponent
  ],
  exports: [
    HeaderComponent, // **** Se indica para usar el componente en otro componente (Page)
    MenuComponent,
    PopoverinfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule, // ***** Traer el componente de Ionic a este components
    RouterModule
  ]
})
export class ComponentsModule { }
