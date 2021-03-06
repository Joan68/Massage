import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MDBBootstrapModulesPro, MDBSpinningPreloader } from 'ng-uikit-pro-standard';
// import { CarouselModule, WavesModule, CardsFreeModule, NavbarModule, CardsModule, SmoothscrollModule, InputsModule} from 'ng-uikit-pro-standard';
// import { ButtonsModule, IconsModule } from 'ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConnectionService } from './connection.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
// For MDB Angular Pro
import { ScrollSpyModule, WavesModule } from 'ng-uikit-pro-standard'

import { AgmCoreModule } from '@agm/core';
import { CarouselComponentComponent } from './carousel-component/carousel-component.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MassageComponent } from './massage/massage.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { TemoignageComponent } from './temoignage/temoignage.component'; 


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponentComponent,
    HomeComponent,
    MassageComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    TemoignageComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({ apiKey: '7jdzZ9x2gChgxyaF-5si' }),
    // CarouselModule.forRoot(),
    // WavesModule.forRoot(),
    // CardsModule.forRoot(),
    // NavbarModule,
    // ButtonsModule,
    // IconsModule,
    AppRoutingModule,
    // CardsFreeModule,
    // SmoothscrollModule.forRoot(),
    // InputsModule.forRoot(),
    // InputsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ScrollSpyModule,
    ScrollToModule.forRoot(),
  ],
  exports:[
    
  ],
  providers: [MDBSpinningPreloader, ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
