/* eslint-disable no-unused-vars */
import type { Router } from "vue-router";
import type { Clerk } from "@clerk/clerk-js";
import type { ofetch } from "ofetch";

declare global {
  type navigationItem = {
    title: string | null;
    description: string | null;
    image: string | undefined;
    _path: string;
    children: navigationItem[];
  };

  type authenticate = {
    strategy: string;
    redirectUrl?: string;
    redirectUrlComplete?: string;
  };
}

declare module "vue" {
  interface ComponentCustomProperties {
    $pinia?: string;
    $toastItems: { push: Function };
    $toastError: Function;
    $clerk: Clerk;
  }
}

declare module "pinia" {
  export interface PiniaCustomProperties {
    // type the router added by the plugin above (#adding-new-external-properties)
    $router: Router;
    $clerk: Clerk;
    $api: ofetch;
  }
}

export {};
