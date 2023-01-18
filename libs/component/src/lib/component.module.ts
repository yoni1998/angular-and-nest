import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderDirectiveDirective } from './header/header-directive.directive';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    RouterModule.forRoot([
      {
        path: 'new',
        component: ContainerComponent,
      },
    ]),
  ],
  declarations: [HeaderComponent, ContainerComponent, FooterComponent, HeaderDirectiveDirective],
  exports: [HeaderComponent, ContainerComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentModule {}
