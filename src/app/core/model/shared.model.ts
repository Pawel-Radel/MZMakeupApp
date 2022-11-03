export interface CompanyUser {
  userId: string;
  name: string;
  surname: string;
  email: string;
  enabled: boolean;
  emailVerified: boolean;
  groups: string[];
  roles: string[];
  attributes: { [key: string]: string };
}

export interface QuerySort {
  order: string;
  direction: string;
}

export interface PageableParams {
  page?: number;
  sort?: QuerySort;
  size?: number;
}

export interface PageSlice<T> {
  content: T[];
  last: boolean;
  totalElements: number;
  totalPages: number;
  first: boolean;
  numberOfElements: number;
  sort: any;
  size: number;
  number: number;
}

export interface UserActionResult {
  user: string;
  success: boolean;
  errorReason: string;
}

