import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FormComponent } from './components/form/form.component';
import { SliderComponent } from './components/slider/slider.component';
import { LabelComponent } from './components/label/label.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormControlComponent } from './components/form/form-control/form-control.component';
import { InputComponent } from './components/form/input/input.component';
import { CtaComponent } from './components/form/cta/cta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutComponent,
    FormComponent,
    SliderComponent,
    LabelComponent,
    FormControlComponent,
    InputComponent,
    CtaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
