import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { PassphraseComponent } from '../shared/passphrase/passphrase.component';
import { PasswordComponent } from '../shared/password/password.component';
import { GeneratewalletComponent } from './generatewallet.component';
import { ModalsService } from '../modals.service';

describe('GeneratewalletComponent', () => {
  let component: GeneratewalletComponent;
  let fixture: ComponentFixture<GeneratewalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ GeneratewalletComponent, PassphraseComponent, PasswordComponent ],
      providers: [ ModalsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratewalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
