import { environment } from './environments/environment';

/**
 * PROVIDES STATIC CONSTANTS WITH THE GENERAL APP SETTINGS
 */
export class AppSettings {

  public static isProduction = environment.production;
  public static apiInstanciaUrl = environment.endpointinstancia;
  public static apiRestaurantUrl = environment.endpointrestautant;
  public static apiGoogleMaps = environment.apiGoogleMaps;

}

