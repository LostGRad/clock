import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TickerComponent, LondonTicker, NyTicker, KievTicker } from './components/ticker/ticker.component';

@NgModule({
  declarations: [
    AppComponent,
    TickerComponent,
    LondonTicker,
    NyTicker,
    KievTicker
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
