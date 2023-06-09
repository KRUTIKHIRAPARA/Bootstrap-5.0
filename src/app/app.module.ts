import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BadgesComponent } from './badges/badges.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CloseButtonComponent } from './close-button/close-button.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DropDownsComponent } from './drop-downs/drop-downs.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { ModalComponent } from './modal/modal.component';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoversComponent } from './popovers/popovers.component';
import { ProgressComponent } from './progress/progress.component';
import { ScrollspyComponent } from './scrollspy/scrollspy.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { ToastsComponent } from './toasts/toasts.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AlertsComponent,
    BadgesComponent,
    BreadcrumbComponent,
    ButtonsComponent,
    ButtonGroupComponent,
    CardComponent,
    CarouselComponent,
    CloseButtonComponent,
    CollapseComponent,
    DropDownsComponent,
    ListGroupComponent,
    ModalComponent,
    NavTabsComponent,
    NavbarComponent,
    OffcanvasComponent,
    PaginationComponent,
    PopoversComponent,
    ProgressComponent,
    ScrollspyComponent,
    SpinnersComponent,
    ToastsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
