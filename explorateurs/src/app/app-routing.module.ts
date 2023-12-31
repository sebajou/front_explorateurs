import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorateurComponent } from './explorateur/explorateur.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExplorateurDetailComponent } from './explorateur-detail/explorateur-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ExplorateurDetailComponent },
  { path: 'explorateurs', component: ExplorateurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
