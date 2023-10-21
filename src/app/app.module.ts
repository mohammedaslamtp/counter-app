import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarbaraComponent } from './components/barbara/barbara.component';
import { CarlosComponent } from './components/carlos/carlos.component';
import { DawnComponent } from './components/dawn/dawn.component';
import { EmreComponent } from './components/emre/emre.component';

@NgModule({
  declarations: [
    AppComponent,
    BarbaraComponent,
    CarlosComponent,
    DawnComponent,
    EmreComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
