import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-and-nest-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  ngOnInit(): void {
    console.log('jiji');
  }
}
