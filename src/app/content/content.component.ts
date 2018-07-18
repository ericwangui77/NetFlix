import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  dataUrl = 'assets/mock.json';
  data = Object;
  mylist = [];
  recommandlist = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get(this.dataUrl).subscribe(data => {
     const json_str = JSON.stringify(data);
     this.mylist = JSON.parse(json_str).mylist;
     this.recommandlist = JSON.parse(json_str).recommendations;
    });
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

