import { Component } from '@angular/core';
import {Model , TodoItems} from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyTodoApp';
  isDisplay = false;
  model = new Model();

  getName() {
    return this.model.user;
  }
  getItems() {
    if (this.isDisplay) {
       return this.model.items ;
    }
    return this.model.items.filter(item => !item.action);

  }
  addItem(desc) {

    if ( desc != '') {
      this.model.items.push(new TodoItems(desc , false));
    }

  }
}
