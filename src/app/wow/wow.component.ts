import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-wow",
  templateUrl: "./wow.component.html",
  styleUrls: ['./wow.component.scss']
})
export class WowComponent implements OnInit{
  
  routeChange = false;
  
  constructor (private router: Router) {}
  
  ngOnInit(): void {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.routeChange = true;
      }
      setTimeout(()=>{
        this.routeChange = false;
      },3400)
    });
  }

}
