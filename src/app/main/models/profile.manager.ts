import { deserialize, serialize } from 'class-transformer';
import { Profile } from './profile';
import { TitleCasePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs/Observable';
import { Empresa } from './empresa';
// import { Auth0UserProfile } from "@types/auth0-js";


@Injectable()
export class ProfileManager {
    constructor(public dataService: DataService) { }

    // public create(auth0Profile: Auth0UserProfile): Observable<Profile> {
    //     return new Observable<Profile>(observer => {
    //         this.dataService.retrieveEmpresas().subscribe(
    //             result => {
    //                 var prof = new Profile();
    //                 var appMetadata = auth0Profile.app_metadata;
    //                 var userMetadata = auth0Profile.user_metadata;
    //                 prof.name = userMetadata['full_name'];
    //                 prof.email = auth0Profile.email;
    //                 prof.empresa = result.find(emp => emp.id === userMetadata['empresa_id']);
    //                 prof.isAdmin = appMetadata['roles'].find(role => role === 'admin');
    //                 observer.next(prof);
    //                 observer.complete();
    //             });
    //     });
    // }

    public loadFromBrowserCache(): Profile {
        return deserialize(Profile, localStorage.getItem('user_profile'));
    }


    public saveOnBrowserCache(profile: Profile) {
        localStorage.setItem('user_profile', serialize(profile));
    }


    public clearBrowserCache() {
        localStorage.removeItem('user_profile');
    }


}


