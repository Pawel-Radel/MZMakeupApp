import {AbilityResource, UserRoleAbility} from "../../../../../projects/ngx-radel-auth/src/lib/model";
import {commune_employee, customer_admin, garbage_dumps_employee, satellite_observer, sewage_treatment_plant_employee, smgFmsAdmin} from "./application-roles";

const NVTAdminAbility = {
  defaultPage: '/dashboard',
  abilities: {
    visit: ['/', '/dashboard/!**', '/profile/!**', '/tenants/!**', '/welcome/!**', '/nvt/admins/!**', '/admins/!**']
  } as AbilityResource
} as UserRoleAbility;

const CustomerAdminAbility = {
  defaultPage: '/dashboard',
  abilities: {
    visit: ['/', '/dashboard/!**', '/profile/!**', '/welcome/!**', '/garbage/!**', '/sewage/!**', '/management/!**', '/pszok/!**', '/decisions/!**', '/satellite/!**']
  } as AbilityResource
} as UserRoleAbility;

export const abilitiesConfig = new Map([
  [smgFmsAdmin, NVTAdminAbility],
  [customer_admin, CustomerAdminAbility],
  [commune_employee, CustomerAdminAbility],
  [garbage_dumps_employee, CustomerAdminAbility],
  [satellite_observer, CustomerAdminAbility],
  [sewage_treatment_plant_employee, CustomerAdminAbility]
]);
