import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { CategoryComponent } from './category/category.component';
import { AccountComponent } from './account/account.component';
import { CommentComponent } from './comment/comment.component';
import { NewsListComponent } from './admin/news/news-list/news-list.component';
import { UpdateNewsComponent } from './admin/news/update-news/update-news.component';
import { CreateListComponent } from './admin/news/create-list/create-list.component';
import { ListNewsComponent } from './admin/news/list-news/list-news.component';
import { CreateNewsComponent } from './admin/news/create-news/create-news.component';
import { ListCategoryComponent } from './admin/category/list-category/list-category.component';
import { CreateCategoryComponent } from './admin/category/create-category/create-category.component';
import { UpdateCategoryComponent } from './admin/category/update-category/update-category.component';
import { ListCommentComponent } from './admin/comment/list-comment/list-comment.component';
import { CreateCommentComponent } from './user/comment/create-comment/create-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    CategoryComponent,
    AccountComponent,
    CommentComponent,
    NewsListComponent,
    UpdateNewsComponent,
    CreateListComponent,
    ListNewsComponent,
    CreateNewsComponent,
    ListCategoryComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent,
    ListCommentComponent,
    CreateCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
