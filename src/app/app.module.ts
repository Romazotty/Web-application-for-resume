import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IndexComponent} from './pages/index/index.component';
import {ResumeComponent} from './pages/resume/resume.component';
import {ContactComponent} from './pages/contact/contact.component';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';
import {ExamplesComponent} from './pages/examples/examples.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ResumeComponent,
    ContactComponent,
    PortfolioComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
