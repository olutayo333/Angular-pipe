import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe1',
  standalone: true,
  imports: [],
  templateUrl: './pipe1.component.html',
  styleUrl: './pipe1.component.css'
})
export class Pipe1Component {
public time:any='';

ngOnInit(){
  this.time = new Date();
  console.log(this.time);
  
}


}
