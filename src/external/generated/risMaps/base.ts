/* tslint:disable */
/* eslint-disable */
/**
 * RIS::Maps
 * ## Info  * powered by [DB Reisendeninformation](https://db-planet.deutschebahn.com/pages/reisendeninformation/apps/content/willkommen) * member of the [RIS-API](https://db.de/ris-api) family, the building kit for traveller informations * for details check out [RIS::Maps](https://api-portal.hub.db.de/db/apis/product/ris-maps) in the DB API Portal  ## Railways  * information and geometries on all railway sections [Streckenabschnitte] and operating-units [Betriebsstellen] of DB Netz and much more information like speeds, regions, districts etc. * railway-links [Verbindungen auf dem Streckennetz] between geo-coordinates * batch queries can be used with `lastChanged` attribute, enables consumer to cache layouts forever and refresh them when data actually changes  ## Vehicle Layouts  * fully digitalized vehicle layouts (e.g. seats, floors, entrances, levels, interioirs etc.) * information for travellers and for staff (Mitarbeiter) * perfect base for graphical seat displays (GDS), for instance * useable with with vehicle-id (UIC number) or concrete layout / design information * can be used with `lastChanged` attribute, enables consumer to cache layouts forever and refresh them when data actually changes  ## Getting Started  * visit our [documentation](https://ris.gitpages.tech.rz.db.de/risapi/documentation/), learn how to [get started with openapi](https://developer-docs.deutschebahn.com/doku/apis/openapi.html) or how to [get started with asyncapi](https://developer-docs.deutschebahn.com/doku/apis/asyncapi.html) and check out our [coding-examples](https://developer-docs.deutschebahn.com/doku/apis) * bounty hunter, bug finder or just idea creator, we are thirsty to hear from you - get in touch with us by using [DB AnwenderEcho](https://anwenderecho.extranet.deutschebahn.com/ris-api/) or write an [email](mailto:rimaps@deutschebahn.com) 
 *
 * The version of the OpenAPI document: 2.1.4
 * Contact: rimaps@deutschebahn.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';

export const BASE_PATH = "https://apis.deutschebahn.com/db/apis/ris-maps/v2".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
    url: string;
    options: AxiosRequestConfig;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration | undefined;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected axios: AxiosInstance = globalAxios) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    constructor(public field: string, msg?: string) {
        super(msg);
        this.name = "RequiredError"
    }
}
