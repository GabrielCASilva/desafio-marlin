
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-post',
  templateUrl: './formulario-post.component.html',
  styleUrls: ['./formulario-post.component.css']
})

export class FormularioPostComponent implements OnInit{

  public form!: FormGroup

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.form = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      body: [null, [Validators.required]]
    })
  }

  onSubmit(){
    console.log(this.form.value)
    if(this.form.valid){
      console.log('submit')
    }
  }
}
