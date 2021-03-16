import { Component, OnInit } from '@angular/core';
import { JSONPlaceholderService } from '../jsonplaceholder.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  count: number = 201;
  i:number = 0;
  list: Array<any> = [];
  completelist: Array<string> = [];
  todolist: Array<string> = [];
  task: string = "";
  todos: Object | undefined;

  constructor(private json:JSONPlaceholderService,private window: Window) {
    
  }

  ngOnInit() {
    this.list = new Array<any>();
    this.completelist = new Array<string>();
  }
//bad practise of writing all in here, shouldbe in services folder
  addtodo()
  {
    this.todos={ title: this.task , id: this.count++, userId: 10, completed: false};
    this.json.postTodo(this.todos).subscribe((data) => {
    console.log("New todo added!",data);
    this.todolist.push(data);
    console.log(data.id+" "+data.title);
    })
  }
  todo()
  {
    this.json.getTodo().subscribe((data) => {
      console.log("All todos");
      this.list=data;
      console.log(this.todolist.length);
      for(this.i=0;this.i<this.todolist.length;this.i++)
      {
        this.list.push(this.todolist[this.i]);
        console.log(this.todolist[this.i])
      }
    })
  }

  complete()
  {
    this.json.getTodo().subscribe((data) => {
      for(this.i=0;this.i<data.length;this.i++){
        console.log("Completed todos");
        if(data[this.i]["completed"] === true)
        {
          this.completelist.push(data[this.i]["id"]+"  "+data[this.i]["title"]);
        }
    }
    })
  }

  play()
  {
    console.log("Inner height: ",window.innerHeight," Outer height: ",window.outerHeight);
    console.log("Inner width: ",window.outerWidth,"Outer width: ",window.innerWidth);
    console.log("Window location: ",window.location);
    console.log("Window hostname: ",window.location.hostname);
    console.log("Window href: ",window.location.href);
    console.log("Window host: ",window.location.host);
    console.log("Window pathname: ",window.location.pathname);
    console.log("Window origin: ",window.location.origin);
    console.log("Window locationbar visibility",window.locationbar.visible);
    console.log("Window menubar visibility",window.menubar.visible);
    console.log("Initial length of local storage: ",window.postMessage);
    window.localStorage.setItem("todo 1","eat")
    window.localStorage.setItem("todo 2","study")
    window.localStorage.setItem("todo 3","sleep")
    console.log(window.localStorage);
    console.log("Current length of local storage: ",window.localStorage.length);
    var gettodo2=window.localStorage.getItem("todo 2");
    console.log("Value of todo 2:",gettodo2);
    console.log("Item at index 1: ",window.localStorage.key(1));
    window.localStorage.removeItem("todo 3");
    console.log(window.localStorage);
    console.log("Current length of local storage: ",window.localStorage.length);
    window.localStorage.clear();
    console.log(window.localStorage);
    console.log("Current length of local storage: ",window.localStorage.length);
    console.log("Window Prompt Message: ",window.prompt("Enter a message to display in window prompt"));
  }
}
