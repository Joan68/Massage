import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { CarouselModule, WavesModule, CardsFreeModule, NavbarModule, CardsModule, SmoothscrollModule} from 'ng-uikit-pro-standard'
import { ButtonsModule, IconsModule } from 'ng-uikit-pro-standard'

import { AgmCoreModule } from '@agm/core';
import { CarouselComponentComponent } from './carousel-component/carousel-component.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MassageComponent } from './massage/massage.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponentComponent,
    HomeComponent,
    MassageComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    // MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({ apiKey: '7jdzZ9x2gChgxyaF-5si' }),
    CarouselModule.forRoot(),
    WavesModule.forRoot(),
    CardsModule.forRoot(),
    NavbarModule,
    ButtonsModule,
    IconsModule,
    AppRoutingModule,
    CardsFreeModule,
    SmoothscrollModule.forRoot(),
  ],
  providers: [MDBSpinningPreloader,],
  bootstrap: [AppComponent]
})
export class AppModule { }
