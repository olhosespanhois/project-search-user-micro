import { TestBed } from '@angular/core/testing';
import { IndexAppComponent } from './app.component';

describe('IndexAppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [IndexAppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(IndexAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title '@station/index'`, () => {
    const fixture = TestBed.createComponent(IndexAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('@station/index');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(IndexAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('@station/index app is running!');
  });
});
