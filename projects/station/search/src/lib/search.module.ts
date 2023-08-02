import { NgModule } from '@angular/core';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchListComponent } from './search-list/search-list.component';



@NgModule({
	declarations: [
		SearchInputComponent,
		SearchListComponent
	],
	imports: [
	],
	exports: [
		SearchInputComponent,
		SearchListComponent
	]
})
export class SearchModule { }
