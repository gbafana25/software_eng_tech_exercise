import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-items-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-items-form.component.html',
  styleUrl: './add-items-form.component.css'
})
export class AddItemsFormComponent {
    prod_name: any;
    prod_quantity: any;
    prod_cost: any;

    ngOnInit() {

    }

    onAddItem() {
      console.log(this.prod_name, this.prod_quantity, this.prod_cost)
      fetch("http://0.0.0.0:5000/add-item", {
        method: "POST",
        body: JSON.stringify({
          name: this.prod_name,
          quantity: this.prod_quantity,
          cost: this.prod_cost
        })
      })
    }
}
