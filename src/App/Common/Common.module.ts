import {NgModule} from '@angular/core';
import {RippleDirective} from './Directives/Ripple.directive';

@NgModule({
    declarations: [RippleDirective],
    exports: [RippleDirective]
})
export class CommonModule { }
