import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EySuccessPageComponent } from '../ey-success-page/ey-success-page.component';

const routes: Routes = [
  {
    path: 'ey-registration-success',
    component: EySuccessPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class EyRoutingModule {}
