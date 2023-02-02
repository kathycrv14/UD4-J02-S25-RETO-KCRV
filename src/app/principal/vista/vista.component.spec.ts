import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserserviceService } from 'src/app/services/userservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VistaComponent } from './vista.component';

describe('VistaComponent', () => {
  let component: VistaComponent;
  let fixture: ComponentFixture<VistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaComponent ], 
      imports: [ HttpClientTestingModule ],
      providers: [ UserserviceService  ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
