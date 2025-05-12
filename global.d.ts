// global.d.ts
export {};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer: Record<string, any>[];
  }
}
