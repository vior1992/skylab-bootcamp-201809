import { Section1Component } from './components/section1/section1.component';
import { SectionComponent } from './components/section/section.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', component: Section1Component },
  { path: 'game', component: SectionComponent }
];