import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaasLandingComponent } from './components/pages/saas-landing/saas-landing.component';

const routes: Routes = [
    {path: '', component: SaasLandingComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}