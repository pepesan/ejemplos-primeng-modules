import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {

  constructor(private router: Router){

  }
  salta() {
    this.router.navigate(['/home']);
  }
}
