import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ItemAddComponent {
  item: Item = { name: '', price: 0 }; // Removido o campo description

  constructor(private itemService: ItemService, private router: Router) { }

  addItem(): void {
    this.itemService.createItem(this.item).subscribe(() => {
      this.router.navigate(['/items']);
    });
  }
}
