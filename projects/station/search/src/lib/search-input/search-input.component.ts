import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesService } from 'projects/station/home/src/app/core/service/services.service';

@Component({
	selector: 'lib-search-input',
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: './search-input.component.html',
	styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
	@Output() resultValue: EventEmitter<any> = new EventEmitter<any>();
	valueInput:any;
	searchForm: FormGroup<{ searchInput: FormControl<any>; }>;
	
	constructor(
		private servicesService: ServicesService, 
		private formBuilder: FormBuilder
	) {
		this.searchForm = this.formBuilder.group({
			searchInput: ['']
		});
	}

	ngOnInit(): void {
		this.searchForm = new FormGroup({
			searchInput: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
			]),
		});
		this.getAllUsers();

	}

	getAllUsers(){
		this.servicesService.getUserList().subscribe({
			next: (result :any) => { 
				this.resultValue.emit(result);
			},
			error: (e: any) => {
				console.log(e);
			},
		});
	}

	getUserSearch(_name:string){
		this.servicesService.getUserSearch(_name).subscribe({
			next: (result :any) => { 
				this.resultValue.emit(result);
			},
			error: (e: any) => {
				console.log(e);
			},
		});
	}

	getSubmit(){ 
		const searchInputControl = this.searchForm.get('searchInput');
		this.valueInput = searchInputControl?.value;
		this.getUserSearch(this.valueInput);
	}

	clearSearchMovie(): void {
		this.searchForm.patchValue({
			searchInput: null
		});
		this.resultValue.emit(null);
		this.getAllUsers();
	}
}
