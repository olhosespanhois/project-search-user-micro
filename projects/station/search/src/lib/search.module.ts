import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchModalComponent } from './search-list/searchModal/search-modal.component';



@NgModule({
	declarations: [],
	imports: [
		FormsModule,
        ReactiveFormsModule,
		SearchInputComponent,
		SearchListComponent,
		SearchModalComponent
	],
	exports: [
		SearchInputComponent,
		SearchListComponent,
		SearchModalComponent
	]
})
export class SearchModule { }
