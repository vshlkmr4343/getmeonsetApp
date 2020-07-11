import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GigChatComponent } from './gig-chat.component';

describe('GigChatComponent', () => {
  let component: GigChatComponent;
  let fixture: ComponentFixture<GigChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GigChatComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GigChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
