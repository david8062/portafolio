import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './home/home.component';
import { BriefcaseComponent } from './briefcase/briefcase.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'portafolio', component: BriefcaseComponent },
    
];
