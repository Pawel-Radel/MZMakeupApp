import {AuthEffects} from "./auth.effects";
import {AppAbilityEffects} from "./app-ability.effects";

export * from './app-ability.effects';
export * from './auth.effects';

export const NGX_RADEL_AUTH_EFFECTS = [
  AuthEffects,
  AppAbilityEffects
];
