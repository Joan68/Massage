import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from "@angular/router";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PathLocationStrategy, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MassageComponent } from './massage/massage.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TemoignageComponent } from './temoignage/temoignage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'massage', component: MassageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'temoignage', component: TemoignageComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }
