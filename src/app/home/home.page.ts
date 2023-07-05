import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  loginForm: any;
  loginForm_validate:any 
  compatible:boolean = false;
  user_login:any = []

  constructor(private formBuilder: FormBuilder) {}
   ngOnInit(): void {
   
    let pessoaString:any = localStorage.getItem('pessoa');
    let pessoaObj = JSON.parse(pessoaString);
    console.log(pessoaObj)
    this.user_login.push(pessoaObj)

    this.loginForm_validate = this.formBuilder.group({
      email: ['teste@gmail.com'],
      password: ['1234']
     })
     this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
     })
   }

   onSubmit(){
    
    this.objCompatible() ? 
    console.log('logado') : 
    console.log('Deslogado');
    this.compatible = this.objCompatible()
    localStorage.setItem('pessoa', JSON.stringify(this.loginForm.value))
   }

   objCompatible(){
     let isEqual = JSON.stringify(this.loginForm_validate.value) === JSON.stringify(this.loginForm.value)
     return isEqual 
   }
}
