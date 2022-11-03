import {Injectable} from "@angular/core";
import {HttpParameterCodec, HttpParams} from "@angular/common/http";
import {ParameterEncoder} from "./ParameterEncoder";
import {PageableParams} from "./shared.model";

@Injectable({providedIn: 'root'})
export class PageableRequestParameterResolver {

  private readonly encoder: HttpParameterCodec;

  constructor() {
    this.encoder = new ParameterEncoder();
  }

  public resolve(pageableParams: PageableParams, filterParams?: any): HttpParams {
    let params = new HttpParams({encoder: this.encoder});
    params = this.setPageableParams(params, pageableParams);
    params = this.setFilterParams(params, filterParams);
    return params;
  }

  public resolveFilters(filterParams: any): HttpParams {
    let params = new HttpParams({encoder: this.encoder});
    params = this.setFilterParams(params, filterParams);
    return params;
  }

  private setPageableParams(params: HttpParams, pageableParams?: PageableParams): HttpParams {
    if (typeof pageableParams !== 'undefined') {
      if (pageableParams.sort) {
        params = params.append('sort', `${pageableParams.sort.order},${pageableParams.sort.direction}`);
      }

      const pageableParamsSource: any = pageableParams;
      ['page', 'size'].forEach(key => {

        if (pageableParamsSource.hasOwnProperty(key)) {
          params = params.append(key, `${pageableParamsSource[key]}`);
        }
      });
    }

    return params;
  }

  private setFilterParams(params: HttpParams, filterParams?: any): HttpParams {
    if (typeof filterParams !== 'undefined') {
      Object.keys(filterParams).map(key => {
        const value = filterParams[key];
        if (null != value && '' !== value) {
          if (Array.isArray(value)) {
            if (value.length > 0) {
              value.forEach(item => params = params.append(key, `${item}`));
            } else {
              params = params.append(key, '');
            }
          } else {
            params = params.append(key, `${value}`);
          }
        }
      });
    }

    return params;
  }

}
