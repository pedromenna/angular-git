import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html'
})
export class ItemDetailComponent implements OnInit {
  item: Item = new Item('', 0); // Inicialização com valores padrão

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam; // Converte o id para número
      if (id) {
        this.itemService.getItem(id).subscribe(data => this.item = data);
      }
    }
  }

  save(): void {
    if (this.item.id) {
      this.itemService.updateItem(this.item).subscribe(() => this.router.navigate(['/items']));
    } else {
      this.itemService.createItem(this.item).subscribe(() => this.router.navigate(['/items']));
    }
  }
}
