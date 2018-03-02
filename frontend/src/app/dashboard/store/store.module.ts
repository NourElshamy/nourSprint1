import { NgModule } from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';

import { StoreRoutingModule } from './store-routing.module';

import { StoreComponent } from './store.component';
import { StoreService } from './store.service';

import { HttpModule } from '@angular/http';


@NgModule({
  imports: [ThemeModule, StoreRoutingModule],
  declarations: [StoreComponent],
  entryComponents: [],
  providers:[StoreService]
})
export class StoreModule {}
