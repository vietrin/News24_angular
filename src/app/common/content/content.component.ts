import { News } from './../../news/news.component';
import { NewsService } from './../../news/news.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  news: Observable<News[]>;
  viewtop: Observable<News[]>;
  p:number=1;
  constructor(private newsService : NewsService,private router: Router) { }

  ngOnInit(): void {
    this.reloadData();

  }
  reloadData() {
    this.news = this.newsService.getAll();
    this.viewtop=this.newsService.getTopView();
    this.newsService.getAll().subscribe(value => console.log(value),error => console.log(error));
    this.newsService.getTopView().subscribe(value => console.log(value),error => console.log(error))

  }
  deleteStudent(id: number) {
    if(confirm('Bạn muốn xóa tin tức này không ?')){
    this.newsService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
      }
  }
  update(id: number) {
    this.router.navigate(['news/update', id]);
  }

}
