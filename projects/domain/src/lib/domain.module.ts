import { NgModule } from '@angular/core';
import { DomainComponent } from './domain.component';
import { HomeComponent } from './features/home/home.component';
@NgModule({
  declarations: [
    DomainComponent,
    HomeComponent
  ],
  imports: [
  ],
  exports: [
    DomainComponent,
    HomeComponent
  ]
})
export class DomainModule { }
