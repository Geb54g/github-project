
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { Users } from '../app/users';
import { Repos } from '../app/repos';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class DataService {
    constructor(private http:Http) {
        console.log('service is ready');
        this.username = 'DynastyElvis';
        this.reponame = 'Quotes';
        this.show = 10;
    
    
       
}
}
