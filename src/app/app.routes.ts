import {Routes} from '@angular/router';
import {FormWrapperComponent} from './components/form-wrapper/form-wrapper.component';
import {AllInOneComponent} from './components/all-in-one/all-in-one.component';
import {ControlContainerComponent} from './components/control-container/control-container.component';
import {SummaryComponent} from './components/summary/summary.component';

export const routes: Routes = [
  { path: 'all-in-one', component: AllInOneComponent },
  { path: 'form-wrapper', component: FormWrapperComponent },
  { path: 'control-container', component: ControlContainerComponent },
  { path: 'summary', component: SummaryComponent },
];
