import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemInicialComponent } from './imagem-inicial.component';

describe('ImagemInicialComponent', () => {
  let component: ImagemInicialComponent;
  let fixture: ComponentFixture<ImagemInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagemInicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagemInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
