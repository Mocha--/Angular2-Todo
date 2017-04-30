import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import {platformBrowser} from '@angular/platform-browser';
import {AppModuleNgFactory} from '../dist/src/App/App.module.ngfactory';
// import {AppModuleNgFactory} from './App/App.module.ngfactory';

console.info('App AOT building');
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
