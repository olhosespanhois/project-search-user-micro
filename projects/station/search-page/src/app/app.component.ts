import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SearchModule } from 'projects/station/search/src/lib/search.module';

@Component({
	selector: 'search-page',
	standalone: true,
	imports: [SearchModule],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class SearchPageAppComponent {
	title:any = 'Project Search Micro Frontend';

	constructor(private titleService:Title) { }
	user: any;

	ngOnInit() {
		this.titleService.setTitle(this.title);
	}
	
	receiveResultValue(result: any) {
		result === null ? this.user = null : this.user = result;
	}
}
