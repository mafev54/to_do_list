import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Item } from "../item";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  editable = false;

  @Input() item!: Item;
  @Output() remove = new EventEmitter<Item>();
  
  constructor(private http: HttpClient) { }

  saveItem(description: string) {
    /*if (!description) return;
    this.editable = false;
    this.item.description = description;*/
  }
}

