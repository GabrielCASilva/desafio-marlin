import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Posts } from "../posts";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  private url = "https://jsonplaceholder.typicode.com/posts"
  private _postsUrl: string = "/assets/utils/posts.json"

  constructor(private http: HttpClient){}

  //função list() foi usada por questões de aprendizado
  list(){
    return this.http.get<Posts[]>(this.url)
  }

  getPosts(): Observable<Posts[]>{
    return this.http.get<Posts[]>(this._postsUrl)
  }

  createPosts(post:Posts[]){
    return this.http.post(this._postsUrl, post)
  }
}
