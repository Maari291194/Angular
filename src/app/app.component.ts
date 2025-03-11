import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  
})
export class AppComponent {
 
  isDisabled:boolean=false
  
  
 n=0;
 i=0;
  changeeven()
 {
   
  this.n=this.n +2;
    this.i=this.n;
    if (this.i %2==0)
    {
     this.isDisabled=false
    }
    else 
    {
      this.isDisabled=true
    }
 }


 changeodd()
 {
   
  this.n=this.n +3;
    this.i=this.n;
    if (this.i %2!==0)
    {
     this.isDisabled=true
    }
    else 
    {
      this.isDisabled=false
    }
 }


 clear()
 {
   
  this.n=0;
    
      this.isDisabled=false
    
 }


}
