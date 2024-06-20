import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'', component: LandingpageComponent},
    {path:'impressum', component:ImpressumComponent},
    {path:'datenschutz', component:DatenschutzComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { 
    
  }
