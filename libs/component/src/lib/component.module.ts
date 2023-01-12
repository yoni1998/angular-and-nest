import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, ContainerComponent, FooterComponent],
  exports: [HeaderComponent, ContainerComponent, FooterComponent]
})
export class ComponentModule {}
