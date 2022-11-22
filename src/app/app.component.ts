import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user = {
    name: 'Peteris',
    age: 100,
  };
  ngOnInit(): void {
    window.localStorage.setItem('cat', 'is hungry'); // local storage key - value
    window.localStorage.setItem('user', JSON.stringify(this.user));

    const catInfo = window.localStorage.getItem('cat');
    const userInfo = window.localStorage.getItem('user') || '';

    // console.log(catInfo);
    // console.log(JSON.parse(userInfo));

    window.sessionStorage.setItem('john', 'deere');

    // const john = window.sessionStorage.getItem('john');

    // console.log(john);

    window.localStorage.removeItem('john');

    document.cookie = 'username=admin'; // cookie key - value
  } //21 32
}
