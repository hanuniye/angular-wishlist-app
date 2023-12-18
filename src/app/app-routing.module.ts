import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './admin/contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: "login", pathMatch: "full",
    title: "login"
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: 'login',
    component: LoginComponent,
    title: "login"
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: "contact"
  },
  //not found page
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
