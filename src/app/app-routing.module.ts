import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./pages/about/about.component";
import {HomeComponent} from "./pages/home/home.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {BotonesComponent} from "./pages/botones/botones.component";
import {NavBarComponent} from "./pages/nav-bar/nav-bar.component";
import {TableComponent} from "./pages/table/table.component";
import {PaginatorComponent} from "./pages/paginator/paginator.component";
import {DataViewComponent} from "./pages/data-view/data-view.component";
import {FormComponent} from "./pages/form/form.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'botones', component: BotonesComponent},
  {path: 'navbar', component: NavBarComponent},
  {path: 'table', component: TableComponent},
  {path: 'paginator', component: PaginatorComponent},
  {path: 'dataview', component: DataViewComponent},
  {path: 'form', component: FormComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent, pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
