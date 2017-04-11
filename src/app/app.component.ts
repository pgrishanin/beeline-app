import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; 
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routerSubscription: Subscription;

    constructor(private router: Router) {}

    ngOnInit() {
        this.routerSubscription = this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe(event => {
                document.body.scrollTop = 0;
            });
    }

    ngOnDestroy() {
        this.routerSubscription.unsubscribe();
    }
}
