import { Component, OnInit } from "@angular/core";
import { Posts } from "../posts";
import { PostsService } from "../services/posts.services";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})

export class PaginaPrincipalComponent implements OnInit{

  public valor!: string
  public posts!: Posts[]
  public dataId = 0

  constructor(private service: PostsService, private router: ActivatedRoute){}

  ngOnInit(){
    this.service.getPosts().subscribe(dados => this.posts = dados)
    this.dataId = this.router.snapshot.params.id
  }


  formulario(){
    console.log(this.valor)
  }


}
