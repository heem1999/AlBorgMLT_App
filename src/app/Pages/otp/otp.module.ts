import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OTPPageRoutingModule } from './otp-routing.module';

import { OTPPage } from './otp.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    IonicModule,
    OTPPageRoutingModule
  ],
  declarations: [OTPPage]
})
export class OTPPageModule {}
