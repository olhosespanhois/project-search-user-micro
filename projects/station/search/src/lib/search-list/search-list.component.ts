import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SearchModalComponent } from './searchModal/search-modal.component';

@Component({
	selector: 'lib-search-list',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './search-list.component.html',
	styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnChanges {
	@Input() user: any;
	userList:any;
	

	constructor(private modalService: NgbModal) {}

	ngOnInit(): void {
		
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['user'] && this.user) {
			this.userList = this.user;
		}
	}

	seeMore(id:any){
		const dialogRef = this.modalService.open(SearchModalComponent);
		dialogRef.componentInstance.id = id;
	}
}
