export interface InstanciaInterface {
  wizard: WizardInterface;
}

export interface WizardInterface {
  user: UserInterface;
  customer: CustomerInterface;
  location: LocationInterface;
  city: CityInterface;
  country: CountryInterface;
}

export interface CityInterface {
  long_name: string;
}

export interface CountryInterface {
  long_name: string;
}

export interface CustomerInterface {
  name: string;
  service_room: boolean;
  service_delivery: boolean;
  service_take_away: boolean;
  service_book: boolean;
  service_table: boolean;
  number_of_branches: number;
}

export interface LocationInterface {
  latitude: number;
  longitude: number;
  address: string;
}

export interface UserInterface {
  first_name: string;
  last_name: string;
  email: string;
  phone: PhoneInterface;
  password: string;
}

export interface PhoneInterface {
  code: string;
  number: string;
}
