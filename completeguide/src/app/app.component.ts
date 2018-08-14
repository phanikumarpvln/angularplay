import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
  h5 {      
 
    }
    .some{
      color: red !important;
      font-size: 100px;
      
    }
  `],
  
 
})
export class AppComponent {
  title = 'My app';
  // name1 = 'my name';
}
