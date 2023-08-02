import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexAppComponent } from 'projects/station/index/src/app/app.component';
import { SearchPageAppComponent } from 'projects/station/search-page/src/app/app.component';
import { SearchModule } from 'projects/station/search/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
	AppComponent
  ],
  imports: [
	NgbModule,
	BrowserModule,
	AppRoutingModule,
	RouterModule,
	CoreModule,
	SearchModule,
	SearchPageAppComponent,
	IndexAppComponent
	
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
