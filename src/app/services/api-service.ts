import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { updateSessionStorageForGuard } from '../common/methods';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private _http: HttpClient, private _route: Router) { }

    logout() {
        updateSessionStorageForGuard(false);
        this._route.navigate(['/login']);
    }



}//end class