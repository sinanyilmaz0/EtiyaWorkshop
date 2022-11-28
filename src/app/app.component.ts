import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title:string|number = 'Etiya Frontend Angular';

  ngOnInit(): void { 
    
    //component oluşturulduğunda çalışır
    /*setTimeout(()=>{
      this.title = "Etiya Frontend Angular"
    }, 5000)*/
  }    
  
}
