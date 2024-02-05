import { HttpClient, HttpHeaders ,HttpClientModule} from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {CommonModule } from '@angular/common';
import { style } from '@angular/animations';
import { Block } from '@angular/compiler';
import { HomeComponent } from './home/home.component';
import { MessageService } from './messageService';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule,HttpClientModule,FormsModule,HomeComponent],
  providers: [
    MessageService,
  ],
})
export class AppComponent implements OnInit{

  public num1 : string = 'test';
  public email : string = '';
  public name : string = '';
  public email1 : string = '';
  public username : string = '';
  public pasword : string = '';
  public password : string = '';
  public num2 : string = ''; 
  public result:number = 0;
  public jsonArray: any[] = [];
  public jsonArray1: any[] = [];
  public getJsonValue: any;
  public getJsonValue1: any;
  public getJsonValue2: any;
  public error: any;
  public sucess: any;
  public postJsonValue: any;
  public postDataJsonValue: any;
  public resetData: any;
  public resetData1:any;
  public message: string = "";
  public message1: any = [];
  
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  title: string = "test";
  ngOnInit(): void{
    this.message = this.messageService.sendMessage("test");
    
    this.messageService.getMethod().subscribe((result) => {
      this.message1 = result;
    });

    this.getMethod();
    this.postMethod();
    this.getMethod1();
    this.getDataById();
 }

 constructor(public http: HttpClient,public messageService: MessageService ){}

 public getMethod(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data) =>{
      this.getJsonValue = data;
      for (const key in this.getJsonValue) {
        if (this.getJsonValue.hasOwnProperty(key)) {
          this.jsonArray.push(this.getJsonValue[key]);
        }
      }
    })
  }

  public getMethod1(){
    this.http.get('https://dummy.restapiexample.com/api/v1/employees').subscribe((data) =>{
      this.getJsonValue1 = data;
      
      this.getJsonValue2 = this.getJsonValue1.data;
      
      for (const key in this.getJsonValue2) {
        if (this.getJsonValue2.hasOwnProperty(key)) {
          this.jsonArray1.push(this.getJsonValue2[key]);
        }
      }
    })
  }
  
  public getDataById(){
    this.http.get('https://dummy.restapiexample.com/api/v1/employees/1').subscribe((data) =>{
      this.getJsonValue1 = data;
      
      this.getJsonValue2 = this.getJsonValue1.data;
      console.log("id data=",this.getJsonValue2);
    })
  }
  public postMethod(){
    const header = new HttpHeaders({
      contentType: "application/json"
    })
    let body ={
        title : 'demo',
        body : 'test',
        userId :1
    };
    
    this.http.post('https://jsonplaceholder.typicode.com/posts',body).subscribe((data) =>{
      this.postJsonValue = data;
    })
  }

  public getDataMethod(){
    let body={};
      this.http.post("https://jsonplaceholder.typicode.com/posts",body).subscribe((data) =>{
        this.postDataJsonValue = data;
      })
  }
  
  formData = {
    name: '',
    password: ''
  };
  submitted: boolean = false;
  failed: boolean = false;
  errorData: boolean = false;
  errorData1: boolean = false;
  success: boolean = false;
  isButtonDisabled: boolean = false; 


  onSubmit(){
    setTimeout(() => {
      this.submitted = false;
    }, 7000); 
    
    this.result = parseInt(this.num1) + parseInt(this.num2);
    const items: any[] = [{'username':'chandler@friends.com', 'password':'1234'}];
    
    for (const num of items) {
    
      if(this.username == num.username && this.password == num.password){
        this.failed = false;
        this.submitted = true;              
      }else{
        this.submitted = false;
        this.failed = true;
        this.errorData1 = true;
      }
    }
    // this.resetData1 = document.getElementById('myForm');
    // this.resetData1.reset();
  }

  selected_fruit = '';
  onChange(value: any) {
    this.selected_fruit = value.target.value;
  }

  checkEmailValidation(value:any){
      var inputvalues = this.username;      
        var regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;    
        if(!regex.test(inputvalues)){      
          this.errorData = true;
          this.isButtonDisabled = true;
        } else{
          this.errorData = false;
          this.isButtonDisabled = false;
        } 
  }
  onClick(value: any){
    
    this.resetData1 = document.getElementById('myForm');
    this.resetData = window.confirm('Are you sure clear data?');
    if(this.resetData){
     this.resetData1.reset();
    }
  }

  openModel(value: any){
    const openModel = document.getElementById('myModal');
    if(openModel != null){
      openModel.style.display = 'block'
    }
  }

  closeModel(value: any){
    const closeModel = document.getElementById('myModal');
   if(closeModel != null){
    closeModel.style.display = 'none'
   }
 }

}