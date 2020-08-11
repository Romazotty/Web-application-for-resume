import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './pages/index/index.component';
import {ResumeComponent} from './pages/resume/resume.component';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';
import {ExamplesComponent} from './pages/examples/examples.component';
import {ContactComponent} from './pages/contact/contact.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'examples', component: ExamplesComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
