import { Component } from "@angular/core";
import { Item } from "./item";
import { HttpClient } from '@angular/common/http';
import { delay } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  newTodo : string = '';

  title = "todo-list-frontend";

  filter: "all" | "active" | "done" = "all";

  allItems = [];

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.query();
  }

  query() {
    this.http.get<any>('http://localhost:3000').subscribe({
      next: data => {
        this.allItems = data?.data;
      },
      error: error => {
        console.error(error);
        alert('Error querying');
      }
    })
  }

  get items() {

    return this.allItems;

    /*if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );*/
  }

  addItem() {
    if (this.newTodo == '') {
      alert('Please enter a todo');
      return;
    }

    this.http.post<any>('http://localhost:3000', { todoValue: this.newTodo }).subscribe({
        error: error => {
          console.error(error);
          alert('Error saving');
        }
    })

    this.newTodo = '';

    this.query();
  }

  remove(item: Item) {
    this.http.delete<any>('http://localhost:3000/' + item._id).subscribe({
      error: error => {
        console.error(error);
        alert('Error deleting');
      }
  })

  this.query();
  }  
}
