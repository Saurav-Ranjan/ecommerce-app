import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  hideDiv = false;
  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe((res:any) => {
      if (this.router.url === '/product-list' || this.router.url === '/product-list') {
        this.hideDiv = true;
      } else {
        this.hideDiv = false;
      }
    });
  }


  navigateToAdmin(){
    this.router.navigate(['/admin']);
    console.log("navigate success")
  }

  navigateToContactUs(){
    this.router.navigate(['/contact-us']);
    console.log("navigate success")
  }
  navigateToCart(){
    this.router.navigate(['/cart']);
    console.log("navigate success")
  }

}
