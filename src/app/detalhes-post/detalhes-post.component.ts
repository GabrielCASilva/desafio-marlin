import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Posts } from "../posts";
import { PostsService } from "../services/posts.services";

@Component({
  selector: 'app-detalhes-post',
  templateUrl: './detalhes-post.component.html',
  styleUrls: ['./detalhes-post.component.css']
})

export class DetalhesPostComponent implements OnInit{

  public posts!: Posts[]
  public dataId = 0

  constructor(private service: PostsService, private router: ActivatedRoute){}

  ngOnInit(){
    this.service.getPosts().subscribe(dados => this.posts = dados)
    this.dataId = this.router.snapshot.params.id
    console.log(this.dataId)
  }


}
