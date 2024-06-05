import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';

export const routes: Routes = [
    {path:'', component: LandingpageComponent},
    {path:'impressum', component:ImpressumComponent},
    {path:'datenschutz', component:DatenschutzComponent},

];
