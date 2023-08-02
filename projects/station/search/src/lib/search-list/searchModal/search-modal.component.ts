import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from 'projects/station/home/src/app/core/service/services.service';


@Component({
	selector: 'app-search-modal',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './search-modal.component.html',
	styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent  implements OnChanges {

	@Input() id: any;
	userDetailsModal: any;

	constructor(
		public activeModal: NgbActiveModal,
		private servicesService: ServicesService
	) {}
	
		ngOnInit() {
			this.getUserDetails(this.id);
		}

		ngOnChanges(changes: SimpleChanges): void {
			if (changes['id'] && this.id) {
				this.getUserDetails(this.id);
			}
		}

		getUserDetails(_id:any):void{
			this.servicesService.getUserDetails(_id).subscribe({
				next: (result :any) => { 
					this.userDetailsModal = result;
				},
				error: (e: any) => {
					console.log(e);
				},
			});
		}
}
