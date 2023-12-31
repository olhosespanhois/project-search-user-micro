import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexAppComponent } from 'projects/station/index/src/app/app.component';
import { SearchPageAppComponent } from 'projects/station/search-page/src/app/app.component';
import { SearchModule } from 'projects/station/search/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ServicesService } from './core/service/services.service';

@NgModule({
	declarations: [AppComponent],
	imports: [
		NgbModule,
		CommonModule,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		AppRoutingModule,
		RouterModule,
		SearchModule,
		CoreModule,
		SearchPageAppComponent,
		IndexAppComponent
	],
	providers: [
		ServicesService,
		Title
	],
	bootstrap: [AppComponent],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
})
export class AppModule { }
