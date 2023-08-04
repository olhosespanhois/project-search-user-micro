import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  standalone: true,
  // imports: [CommonModule],
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class IndexAppComponent {
  title:any = 'Project Search Micro Frontend';

  constructor(private titleService:Title) { }
  
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
