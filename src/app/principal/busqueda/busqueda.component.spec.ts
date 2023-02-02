import { ComponentFixture, TestBed } from '@angular/core/testing';
/* import { HttpClientModule } from '@angular/common/http'; */
import { BusquedaComponent } from './busqueda.component';
import { UserserviceService } from 'src/app/services/userservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('BusquedaComponent', () => {
  let component: BusquedaComponent;
  let fixture: ComponentFixture<BusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaComponent],
      imports: [ HttpClientTestingModule ],
      providers: [ UserserviceService  ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
