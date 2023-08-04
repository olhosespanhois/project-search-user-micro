import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexAppComponent } from 'projects/station/index/src/app/app.component';
import { SearchPageAppComponent } from 'projects/station/search-page/src/app/app.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: IndexAppComponent },
  { path: 'busca', component: SearchPageAppComponent }
]; 

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
