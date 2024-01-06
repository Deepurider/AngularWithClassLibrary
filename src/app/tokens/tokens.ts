import { InjectionToken } from "@angular/core";

export interface Config {
    localUrl: string
}

export const CONFIG_TOKEN = new InjectionToken<Config>("CONFIG_TOKEN");
export const API_TOKEN = new InjectionToken<Config>("API_TOKEN");
export const REPORTING_TOKEN = new InjectionToken<Config>("REPORTING_TOKEN");
export const REST_TOKEN = new InjectionToken<Config>("REST_TOKEN");