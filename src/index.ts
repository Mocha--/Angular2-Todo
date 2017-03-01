/**
 * polyfill
 */
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

/**
 * vendors
 */
// import 'rxjs';

if (process.env.ENV === 'development') {
    require('zone.js/dist/long-stack-trace-zone');
}

import './index.styl';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TodoAppModule } from './App/app';

platformBrowserDynamic().bootstrapModule(TodoAppModule);
