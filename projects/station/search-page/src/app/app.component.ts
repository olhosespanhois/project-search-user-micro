import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'search-page',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class SearchPageAppComponent {
  title:any = 'Project Search Micro Frontend - Busca';

  constructor(private titleService:Title) { }
  
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
