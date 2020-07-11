import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyGigComponent } from './my-gig.component';

describe('MyGigComponent', () => {
  let component: MyGigComponent;
  let fixture: ComponentFixture<MyGigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGigComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyGigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
