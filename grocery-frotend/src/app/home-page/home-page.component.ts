import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  all_items: any;

  ngOnInit() {
    this.getGroceryItems();
  }

  async getGroceryItems() {
    const resp = await fetch("http://localhost:5000/get-items")
    this.all_items = await resp.json()
    console.log(this.all_items)
  }

}
