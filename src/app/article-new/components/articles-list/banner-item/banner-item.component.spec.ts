/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerItemComponent } from './banner-item.component';

describe('BannerItemComponent', () => {
  let component: BannerItemComponent;
  let fixture: ComponentFixture<BannerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
