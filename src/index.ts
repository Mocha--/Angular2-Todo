/**
 * Vendor Styles
 */
import 'material-design-iconic-font/dist/css/material-design-iconic-font.css';

/**
 * polyfill
 */
// TODO: reduce core-js imports. Only import the ones we need to polyfill
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

/**
 * vendors
 */
 console.info(`Current Mode is ${process.env.NODE_ENV}`);


import {enableProdMode} from '@angular/core';
if (process.env.NODE_ENV === 'production') {
    enableProdMode();
}

if (process.env.NODE_ENV === 'development') {
    require('zone.js/dist/long-stack-trace-zone');
}

/**
 * App Files
 */
import './index.styl';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from './App/App.module';

platformBrowserDynamic().bootstrapModule(AppModule);
