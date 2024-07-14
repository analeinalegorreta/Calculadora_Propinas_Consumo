import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeniItemComponent } from './components/meni-item/meni-item.component';
import { OrderContentsComponent } from './components/order-contents/order-contents.component';
import { TipPercentageFormComponent } from './components/tip-percentage-form/tip-percentage-form.component';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MeniItemComponent,
    OrderContentsComponent,
    TipPercentageFormComponent,
    OrderTotalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
