import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  all_items: any;
  name_search: any;
  quant_search: any;
  cost_search: any;

  ngOnInit() {
    this.getGroceryItems();
  }

  async getGroceryItems() {
    const resp = await fetch("http://172.31.1.240:5000/get-items")
    this.all_items = await resp.json()
    console.log(this.all_items)
  }

  async searchItems() {
    console.log(this.cost_search, this.name_search, this.quant_search);
    var namefield: any = "none"
    var quanfield: any = -1
    var costfield: any = -1
    if(this.name_search != undefined && this.name_search != '') {
      namefield = this.name_search
    }
    if(this.quant_search != undefined) {
      quanfield = this.quant_search
    }
    if(this.cost_search != undefined) {
      costfield = this.cost_search
    }
    
    const r = await fetch("http://172.31.1.240:5000/search-items", {
      method: "POST",
      body: JSON.stringify({
        name: namefield,
        quantity: quanfield,
        cost: costfield
      })
    })
    this.all_items = await r.json()
    //console.log(await r.json())



  }

}
