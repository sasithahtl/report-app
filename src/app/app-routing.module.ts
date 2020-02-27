import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeatmapComponent } from './heatmap/heatmap.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'reports',
    component: HeatmapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
