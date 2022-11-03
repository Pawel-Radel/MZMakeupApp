import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {PageableRequestParameterResolver} from "../model/pageableRequestParameterResolver";
import {Observable} from "rxjs";
import {CompanyUser, PageableParams, PageSlice, UserActionResult} from "../model/shared.model";

const BASE_URL = environment.serverUrl;
const routes = {
  me: () => `${BASE_URL}/me`,
};

@Injectable({
  providedIn: 'root'
})
export class PanelUserService {

  constructor(private _httpClient: HttpClient,
              private pageableParamsResolver: PageableRequestParameterResolver) {
  }

  getUserProfile(): Observable<CompanyUser> {
    return this._httpClient.get<CompanyUser>(routes.me());
  }

  createUser(user: CompanyUser): Observable<UserActionResult> {
    return this._httpClient.post<UserActionResult>(BASE_URL + '/users', user)
  }

  updateUser(userId: string, user: CompanyUser): Observable<UserActionResult> {
    return this._httpClient.put<UserActionResult>(BASE_URL + '/users/' + `${userId}`, user)
  }

  findById(userId: string): Observable<CompanyUser> {
    return this._httpClient.get<CompanyUser>(BASE_URL + '/users/' + `${userId}`)
  }
}
