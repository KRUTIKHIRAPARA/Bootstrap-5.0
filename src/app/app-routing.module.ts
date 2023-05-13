import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path:'accordion',
    component:AccordionComponent
  },
  {
    path:'alert',
    component:AlertsComponent
  },
  {
    path:'badges',
    component:BadgesComponent
  },
  {
    path:'breadcrumb',
    component:BreadcrumbComponent
  },
  {
    path:'buttons',
    component:ButtonsComponent
  },
  {
    path:'button-group',
    component:ButtonGroupComponent
  },
  {
    path:'card',
    component:CardComponent
  },
  {
    path:'carousel',
    component:CarouselComponent
  },
  {
    path:'close-button',
    component:CloseButtonComponent
  },
  {
    path:'collapse',
    component:CollapseComponent
  },
  {
    path:'drop-downs',
    component:DropDownsComponent
  },
  {
    path:'list-group',
    component:ListGroupComponent
  },
  {
    path:'modal',
    component:ModalComponent
  },
  {
    path:'nav-tabs',
    component:NavTabsComponent
  },
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'offcanvas',
    component:OffcanvasComponent
  },
  {
    path:'pagination',
    component:PaginationComponent
  },
  {
    path:'popovers',
    component:PopoversComponent
  },
  {
    path:'progress',
    component:ProgressComponent
  },
  {
    path:'scrollspy',
    component:ScrollspyComponent
  },
  {
    path:'spinners',
    component:SpinnersComponent
  },
  {
    path:'toasts',
    component:ToastsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
