export interface OrganizationUserRegistration {
  titleCode?: string;
  email: string;
  firstName: string;
  lastName: string;
  message?: string;
  gender?: string;
  dob: string;
  age: string;
  qualification: string;
  isocode: string;
  companyName?: string;
  line1?: string;
  line2: string;
  town: string;
  postalCode: string;
  phoneNumber?: string;
}

export interface OrganizationUserRegistrationForm
  extends OrganizationUserRegistration {
  addressLine1?: string;
  addressLine2?: string;
  region?: string;
  country?: string;
  phoneNumber?: string;
}
