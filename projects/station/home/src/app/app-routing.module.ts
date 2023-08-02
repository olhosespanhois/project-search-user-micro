import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndexAppComponent } from 'projects/station/index/src/app/app.component';
import { SearchPageAppComponent } from 'projects/station/search-page/src/app/app.component';


@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'home', component: IndexAppComponent },
        { path: 'busca', component: SearchPageAppComponent }
      ]
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
