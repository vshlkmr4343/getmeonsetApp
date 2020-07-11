import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AggrementComponent } from './aggrement.component';

describe('AggrementComponent', () => {
  let component: AggrementComponent;
  let fixture: ComponentFixture<AggrementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggrementComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AggrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
