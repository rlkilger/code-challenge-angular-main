import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StarWarsModule } from 'src/app/star-wars/star-wars.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    StarWarsModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
