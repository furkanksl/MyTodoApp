
export class Model {
  user;
  items;

  constructor() {
    this.user = 'Your Name';
    this.items = [
      new TodoItems('Breakfast' , false),
    ];
  }
}

export class TodoItems {
  description;
  action;

  constructor(description , action) {
    this.action = action;
    this.description = description;
  }

}


