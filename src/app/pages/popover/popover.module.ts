import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverPageRoutingModule } from './popover-routing.module';

import { PopoverPage } from './popover.page';
import { PopoverinfoComponent } from 'src/app/components/popoverinfo/popoverinfo.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  entryComponents:[
    PopoverinfoComponent // se agrega los elementos que se carga de forma dinamica
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PopoverPage]
})
export class PopoverPageModule {}
