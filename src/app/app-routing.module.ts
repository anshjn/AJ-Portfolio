import { HomeComponent } from './home/home.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
