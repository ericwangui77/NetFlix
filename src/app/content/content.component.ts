import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  json_str = '{"mylist" : [{"title": "Futurama","id": 1,"img": "http://cdn1.nflximg.net/webp/7621/3787621.webp"},' +
    '{"title": "The Interview","id": 2,"img": "http://cdn1.nflximg.net/webp/1381/11971381.webp"},' +
    '{"title": "Gilmore Girls","id": 3,"img": "http://cdn1.nflximg.net/webp/7451/11317451.webp"}],' +
    '"recommendations":[{"title": "Family Guy","id": 4,"img": "http://cdn5.nflximg.net/webp/5815/2515815.webp"},' +
    '{"title": "The Croods","id": 5,"img": "http://cdn3.nflximg.net/webp/2353/3862353.webp"},' +
    '{"title": "Friends","id": 6,"img": "http://cdn0.nflximg.net/webp/3200/9163200.webp"}]}';
  mylist = [];
  recommandlist = [];

  constructor() {
  }
  ngOnInit() {
    this.mylist = JSON.parse(this.json_str).mylist;
    this.recommandlist = JSON.parse(this.json_str).recommendations;
  }
  add(event) {
    this.DeleteFromRecommand(event.target.name);
  }
  remove(event) {
    this.DeleteFromMyList(event.target.name);
  }
  DeleteFromMyList(id: string) {
    for (let i = 0; i < this.mylist.length; i++) {
      if ( this.mylist[i].id === parseInt(id, 10)) {
        const obj = this.mylist.splice(i, 1)[0];
        this.AddToRecommand(obj);
        break;
      }
    }
    this.ListSort();
  }
  AddToMyList(obj: Object) {
    this.mylist.push(obj);
  }
  AddToRecommand(obj: Object) {
    this.recommandlist.push(obj);
  }
  DeleteFromRecommand(id: string) {
    for (let i = 0; i < this.recommandlist.length; i++) {
      if ( this.recommandlist[i].id === parseInt(id, 10)) {
        const obj = this.recommandlist.splice(i, 1)[0];
        this.AddToMyList(obj);
        break;
      }
    }
    this.ListSort();
  }
  ListSort() {
    this.mylist.sort(function(a, b ) {
      return a.id - b.id;
    });
    this.recommandlist.sort(function(a, b ) {
      return a.id - b.id;
    });
  }
}

