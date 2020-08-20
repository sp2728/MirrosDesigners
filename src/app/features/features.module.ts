import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FeaturesComponent, 
    HomeComponent, AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FeaturesRoutingModule,
    SharedModule
  ]
})
export class FeaturesModule { }
