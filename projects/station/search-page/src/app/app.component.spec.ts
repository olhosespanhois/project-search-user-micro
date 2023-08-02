import { TestBed } from '@angular/core/testing';
import { SearchPageAppComponent } from './app.component';

describe('SearchPageAppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [SearchPageAppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SearchPageAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title '@station/search-page'`, () => {
    const fixture = TestBed.createComponent(SearchPageAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('@station/search-page');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SearchPageAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('@station/search-page app is running!');
  });
});
