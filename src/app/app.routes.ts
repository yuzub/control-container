import { Routes } from '@angular/router';
import { FormWrapperComponent } from './components/form-wrapper/form-wrapper.component';
import { AllInOneComponent } from './components/all-in-one/all-in-one.component';
import {SeparateControlsComponent} from './components/separate-controls/separate-controls.component';
import {ControlContainerComponent} from './components/control-container/control-container.component';

export const routes: Routes = [
  { path: 'all-in-one', component: AllInOneComponent },
  { path: 'separate-controls', component: SeparateControlsComponent },
  { path: 'form-wrapper', component: FormWrapperComponent },
  { path: 'control-container', component: ControlContainerComponent },
];
