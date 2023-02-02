import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { OperacionComponent } from './operacion.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('OperacionComponent', () => {
  let component: OperacionComponent;
  let fixture: ComponentFixture<OperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperacionComponent ],
      imports: [ MatFormFieldModule,FormsModule,MatInputModule,MatSelectModule,BrowserAnimationsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testSumar()', () => {
    expect(component.sumar(1,2)).toEqual(3);
  });
  
});

