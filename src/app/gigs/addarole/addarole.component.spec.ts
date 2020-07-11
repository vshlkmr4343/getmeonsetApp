import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddaroleComponent } from './addarole.component';

describe('AddaroleComponent', () => {
  let component: AddaroleComponent;
  let fixture: ComponentFixture<AddaroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddaroleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddaroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
