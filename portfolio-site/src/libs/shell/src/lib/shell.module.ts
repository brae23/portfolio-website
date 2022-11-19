import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavShellComponent } from './nav/nav-shell.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

const routes = [
  { path: 'home', component: NavShellComponent, children: [{ path: '', component: HomeComponent}]},
  { path: 'about', component: NavShellComponent, children: [{ path: '', component: AboutComponent}] },
  { path: 'contact', component: NavShellComponent, children: [{ path: '', component: ContactComponent}] }
]

@NgModule({
  declarations: [
    HomeComponent,
    NavShellComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
    HomeComponent,
    NavShellComponent
  ]
})
export class ShellModule { }
