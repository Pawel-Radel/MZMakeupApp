import { PureAbility, AbilityClass } from '@casl/ability';

export type AppAbilityActions = 'manage' | 'create' | 'read' | 'update' | 'delete' | 'visit';

export type AppAbility = PureAbility<[AppAbilityActions, string]>;
export const AppAbility = PureAbility as AbilityClass<AppAbility>;

export function createAbility(): AppAbility {
  return new AppAbility();
}
