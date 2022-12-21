import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {
  constructor(){}
  
  ngOnInit(): void {
    
  }

  public selectedProduct='';
  setvalue(drp:any)
  {
    this.selectedProduct=drp.target.value;
  }


  title ='Data';
  data=[
    {
      name:'Umesh',
      age:25,
      email:'umesh@123'
    },
    {
      name:'Sharad',
      age:28,
      email:'sharad@123'
    },
    {
      name:'shivam',
      age:20,
      email:'shivam@123'
    }

  ]






  mypro:boolean=false;
  mystyle:string="15px"
  isActive:boolean=false
  mltclasses = {
    class1:true,
    class2:false,
    class3:true
  }

  mltStyle ={
    'background': 'red',
    'border': '10px solid green'
  }


  userId: number = 10;
  userStatus: string = "Offline";

  getUserStatus(){
    return this.userStatus;
  }

  dynName:string="Umesh";

  myMethod(){
    return "My name is"+this.dynName
  }

  enable:boolean=true;

   appStatus:boolean=true;
   Status1 ="Online";
   Status2 ="Offline";

   msg:string ="";
   OnAddCart(event:any){
    this.msg = event.target.value +'Added in Cart';
   }

   OnInputClick(event:any){
    console.log(event.target.value);
   }

}
