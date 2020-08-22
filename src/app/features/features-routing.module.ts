import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes:Routes = [
    {path:"", component:FeaturesComponent,
    children:[
        {
            path:"", component:HomeComponent
        },
        {
            path:"about", component: AboutComponent
        },
        {
            path:"contact", component: ContactComponent
        }
    ]}
]

@NgModule({
    declarations: [],
    imports: [CommonModule,RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class FeaturesRoutingModule { }