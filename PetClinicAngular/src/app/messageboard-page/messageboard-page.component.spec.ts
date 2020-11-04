import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageboardPageComponent } from './messageboard-page.component';

describe('MessageboardPageComponent', () => {
  let component: MessageboardPageComponent;
  let fixture: ComponentFixture<MessageboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
