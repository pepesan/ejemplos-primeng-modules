import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {MenuModule} from "primeng/menu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BotonesComponent } from './pages/botones/botones.component';
import {RippleModule} from "primeng/ripple";
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import { TableComponent } from './pages/table/table.component';
import {TableModule} from "primeng/table";
import {ProductService} from "./services/product.service";
import { PaginatorComponent } from './pages/paginator/paginator.component';
import {PaginatorModule} from "primeng/paginator";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DataViewComponent } from './pages/data-view/data-view.component';
import {DataViewModule} from "primeng/dataview";
import {HttpClientModule} from "@angular/common/http";
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";
import { FormComponent } from './pages/form/form.component';
import {CardModule} from "primeng/card";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    BotonesComponent,
    NavBarComponent,
    TableComponent,
    PaginatorComponent,
    DataViewComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ToastModule,
    MenuModule,
    ButtonModule,
    RippleModule,
    MenubarModule,
    InputTextModule,
    TableModule,
    PaginatorModule,
    DataViewModule,
    HttpClientModule,
    RatingModule,
    TagModule,
    ReactiveFormsModule,
    CardModule,
  ],
  providers: [MessageService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
