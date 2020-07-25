import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppSettingsService {

   constructor(private http: HttpClient) {
    }

    public getJSON(): Observable<any> {
        return this.http.get("./assets/groceries.json");
    }
}