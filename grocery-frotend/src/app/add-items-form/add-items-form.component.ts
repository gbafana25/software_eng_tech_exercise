import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

    constructor(private router: Router) {}

    ngOnInit() {

    }

    onAddItem() {
      console.log(this.prod_name, this.prod_quantity, this.prod_cost)
      fetch("http://ec2-3-144-83-59.us-east-2.compute.amazonaws.com:5000/add-item", {
        method: "POST",
        body: JSON.stringify({
          name: this.prod_name,
          quantity: this.prod_quantity,
          cost: this.prod_cost
        })
      })
      this.router.navigate(['/home'])
    }
}
