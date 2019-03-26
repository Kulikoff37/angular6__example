import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { UserNameService } from '../../auth/user-name.service';
import { UserServer} from '../../auth/models/user-server.interface';

@Component({
    selector: 'app-header-dashboard-top',
    templateUrl: './header-dashboard-top.component.html',
    styleUrls: ['./header-dashboard-top.component.scss']
})
export class HeaderDashboardTopComponent implements OnInit {
    user: UserServer = {
        uuid: '',
        fullName: '',
        email: '',
        cfoUUID: '',
        password: '',
        externalUserUUID: ''
    };
    shortName;
    open = false;
    constructor(
        private authService: AuthService,
        private userNameService: UserNameService,
    ) { }
    ngOnInit() {
        this.authService.getUser().subscribe((user: UserServer) => {
            this.user = user;
            this.userNameService.userName = user.fullName;
            this.shortName = this.userNameService.userName;
        });
    }

    toggleDialog() {
        this.open = !this.open;
    }
}
