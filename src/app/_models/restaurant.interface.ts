export interface RestaurantInterface {
  _id?: string;
  name: string;
  service_room: boolean;
  service_delivery: boolean;
  service_take_away: boolean;
  service_book: boolean;
  service_table: boolean;
  number_of_branches: number;
  address?: string;
}
