import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement} from '@angular/core';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser'; 

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    }).compileComponents();
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('h1'));
    htmlElement = debugElement.nativeElement;
  });

  it('testing the h1 component', () => {
    // assert that the text on screen is equal to value below
    expect(htmlElement.textContent).toEqual('Shop Today!');
  })


/* TEMPLATE CONTENT
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */
});
