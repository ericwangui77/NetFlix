import { Component, OnInit } from '@angular/core';
import {FilmdDateService} from '../Service/filmdata.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  list_data = [];
  remm_data = [];
  constructor(private dateService: FilmdDateService) {
  }

  ngOnInit() {
    this.list_data = this.dateService.mylist;
    this.remm_data = this.dateService.recommandlist;
  }

  remove(event) {
    console.log(event.target.name);
    this.dateService.DeleteFromMyList(event.target.name);
  }

  add(event) {
    console.log(event.target.name);
    this.dateService.DeleteFromRecommand(event.target.name);
  }
}

