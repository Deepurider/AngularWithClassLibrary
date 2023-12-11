import { InjectionToken } from "@angular/core";

export interface Config {
    localUrl: string
}
export const CONFIG_TOKEN = new InjectionToken<Config>("CONFIG_TOKEN");