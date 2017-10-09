import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateDiscountPage } from './create-discount';

@NgModule({
  declarations: [
    CreateDiscountPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateDiscountPage),
  ],
})
export class CreateDiscountPageModule {}
