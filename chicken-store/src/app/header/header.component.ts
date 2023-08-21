import { Component, OnInit } from '@angular/core';
import { Product } from '../store/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {
  }

  cart: Product[] = [];
  ngOnInit() {}
}
