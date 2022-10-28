import { Injectable } from '@angular/core';
import {PureAbility} from "@casl/ability";

@Injectable({
  providedIn: 'root'
})
export class VisitAbilityService {

  constructor(private ability: PureAbility) {
  }

  canVisit(url: string): boolean {
    let canVisit = this.ability.can('visit', url);

    if (!canVisit) {
      const paths: string[] = url.split('/').filter(path => path !== '');
      let stringToCheck = '';
      for (const path of paths) {
        stringToCheck += `/${path}`;
        canVisit = this.ability.can('visit', `${stringToCheck}/**`);
        if (canVisit) {
          break;
        }
      }
    }

    return canVisit;

  }
}

