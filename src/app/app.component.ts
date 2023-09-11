import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-practice-project';
  displayValue='';
  displayValue1='';
  show=true;
  show1:any;
  color='red';
  data='X';
  today=Date();
  display=true;
  display1=true;
  ngformdata:any= {};
  bgColor='skyblue';
  users=['Ashish','Rajput','Anshu','Sam','Rohit'];
  usersDetails=[
    {name:'Ashish', email:'ashish@learn.com', address:'Varanasi', mob:1234, socialAccounts:['insta','facebook','gmail']},
    {name:'Rajput', email:'rajput@learn.com', address:'Varanasi', mob:1456, socialAccounts:['yahoo','facebook','linkedin']},
    {name:'Anshu', email:'anshu@learn.com', address:'Varanasi', mob:4567,socialAccounts:['insta','linkedin','gmail']}
  ]

  tasklist:any[]=[]

  getName(name:any){
    alert(name)
    this.displayValue=name
  }
  getData(val:any){
    console.warn(val)
    this.displayValue1=val
  }

  updateColor()
  {
    this.color='blue'
    this.bgColor='yellow'
  }
  originalColor()
  {
    this.color='red'
    this.bgColor='skyblue'
  }
  getFormData(data:any)
  {
    console.log(data)
    this.ngformdata=data;
  }
  hideData()
  {
    this.display=!this.display

  }
  hideData1()
  {
    this.display1=!this.display1
  }

  addTask( task:any)
  {
      this.tasklist.push({id:this.tasklist.length, name: task})
      console.warn(this.tasklist)
  }
   removeTask(id:number)
   {
    console.warn(id)
    this.tasklist=this.tasklist.filter(item=>item.id!==id)

   }

   updateData(data:any){
    console.warn(data)
    this.data=data;
   }
}
