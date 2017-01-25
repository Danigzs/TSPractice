import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `
  
     <ul>
  <li><a href="default">Home</a></li>
  <li><a href="news">News</a></li>
  <li><a href="contact">Contact</a></li>
  <li><a href="about">About</a></li>
</ul>
  
  `,
  styles: [`

  h1{
  position: fixed;
  bottom: 0;
  width: 100%

  }

 ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover {
    background-color: #111;
}
ul {
    position: fixed;
    top: 0;
    width: 100%;
}

  
   `]
})
export class NavbarComponent  {}
