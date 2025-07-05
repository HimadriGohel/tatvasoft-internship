import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {

  
     title='test';
    username='';
    pass=''
    result: boolean | null = null;
    check(){
      this.result = (this.username === 'hima' && this.pass === '123');
    }


    showData(){
      console.log(this.username);
      console.log(this.pass);
    }
  }

