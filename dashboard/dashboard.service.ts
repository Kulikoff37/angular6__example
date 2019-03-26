import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()

export class DashboardService {
    constructor(private http: HttpClient) {
    }

    private API_URL = environment.API_URL;
    apiUrl: any = {
        urlSearch: '/order/recent'
    };

    getOrdersList(page, size): Observable<any> {
        const httpParams = new HttpParams()
            .append('page',  page)
            .append('size', size);
        return this.http
            .get(this.API_URL + this.apiUrl.urlSearch, {params: httpParams})
            .map(result  => {
                return result;
            });
    }
}
