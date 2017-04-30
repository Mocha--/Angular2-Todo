/**
 * polyfill
 */
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

/**
 * vendors
 */

if (process.env.ENV === 'development') {
    require('zone.js/dist/long-stack-trace-zone');
}

import './index.styl';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from './App/App.module';

platformBrowserDynamic().bootstrapModule(AppModule);
