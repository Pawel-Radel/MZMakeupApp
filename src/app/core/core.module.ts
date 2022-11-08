import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthModule} from "./auth/auth.module";
import {ActionReducer, MetaReducer, StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {CORE_EFFECTS} from "./store";

export const metaReducers: MetaReducer<any>[] = [debug];

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('[STORE] state', state);
    console.log('[STORE] action ', action.type);

    return reducer(state, action);
  };
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
    StoreModule.forRoot({}, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    EffectsModule.forRoot(CORE_EFFECTS),
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import CoreModule modules in the AppModule only.`);
    }
  }
}
