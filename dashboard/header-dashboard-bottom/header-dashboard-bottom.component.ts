import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header-dashboard-bottom',
    templateUrl: './header-dashboard-bottom.component.html',
    styleUrls: ['./header-dashboard-bottom.component.scss']
})
export class HeaderDashboardBottomComponent implements OnInit {
    time = '';
    date = '';
    constructor() { }
    ngOnInit() {
        this.simpleTimer();
    }

    simpleTimer() {
        const self = this;
        tick();
        setInterval(tick, 1000);
        function tick() {
            const curTime = new Date();
            self.time = curTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
            self.date = curTime.toLocaleTimeString([], {month: 'long', day: '2-digit'});
            self.date = self.date.substring(0, self.date.indexOf(','));
        }
    }
}
