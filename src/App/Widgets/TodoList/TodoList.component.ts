import {Component, Pipe, PipeTransform, ElementRef, Input, OnInit, OnChanges, OnDestroy, AfterViewInit, SimpleChanges, SimpleChange} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {Todo} from '../../Models/Todo';
import './TodoList.component.styl';

const MOUSE_MOVE_DOM_EVENT = 'mousemove';
const MOUSE_UP_DOM_EVENT = 'mouseup';

interface TodoViewStyle {
    transition: string;
    transform: string;
}

interface MovingItem {
    item: TodoView;
    xCoordinate: number;
}

class TodoView {
    contentStyle: TodoViewStyle = {transition: 'none', transform: 'translate3d(0, 0, 0)'};
    doneStyle: TodoViewStyle = {transition: 'none', transform: 'scale3d(0, 0, 1)'};

    constructor(private task: string = '', private isCompleted: boolean = false) { }

    moveContentTo(x: number) {
        this.contentStyle.transform = `translate3d(${x}px, 0, 0)`;
    }

    restoreContentPos() {
        this.contentStyle.transform = 'translate3d(0, 0, 0)';
    }

    addContentTransition() {
        this.contentStyle.transition = 'transform .3s ease-in-out';
    }

    removeContentTransition() {
        this.contentStyle.transition = 'none';
    }

    scaleDone(ratio: number) {
        const properRatio = ratio < 0 ? 0
            : ratio > 1 ? 1
            : ratio;
        this.doneStyle.transform = `scale3d(${properRatio}, ${properRatio}, 1)`;
    }

    restoreDone() {
        this.doneStyle.transform = 'scale3d(0, 0, 1)';
    }
}

@Component({
    selector: 'todo-list',
    templateUrl: './TodoList.component.html',
    animations: [
        trigger('flyEnterAndLeave', [
            state('void', style({
                transform: 'translate3d(-50%, 0, 0)',
                opacity: 0
            })),
            transition(':enter, :leave', animate(300))
        ])
    ]
})
export class TodoList implements OnInit {
    @Input() todos: Todo[];
    todoViewList: TodoView[];
    mouseDown$: Observable<MovingItem>;
    mouseMove$: Observable<MouseEvent>;
    mouseUp$: Observable<MouseEvent>;
    mouseObserver: Observer<MovingItem>;

    constructor(private elm: ElementRef) { }

    /**
      * Lifecycle Hooks
      */
    ngOnInit() {
        this.todoViewList = this.todos.map((elm: Todo) => {
            const {task, isCompleted} = elm;
            return new TodoView(task, isCompleted);
        });

        this.mouseMove$ = Observable.fromEvent(document, MOUSE_MOVE_DOM_EVENT);
        this.mouseUp$ = Observable.fromEvent(document, MOUSE_UP_DOM_EVENT);
        this.mouseDown$ = Observable
            .create((observer: Observer<MovingItem>) => {
                // this.mouseObserver = observer;
                console.info('on subscription');
            });
        this.mouseDown$
            .mergeMap((movingItem: MovingItem) => {
                const {item, xCoordinate: initX} = movingItem;
                // this.mouseUp$.subscribe(() => {
                //     console.info('mouse up subscribed');
                //     item.restoreDone();
                //     item.addContentTransition();
                //     item.restoreContentPos();
                // });
                return this.mouseMove$
                    .throttleTime(20)
                    .map((mouseMoveEvt: MouseEvent) => {
                        const {clientX} = mouseMoveEvt;
                        return {
                            item,
                            xCoordinate: clientX - initX
                        };
                    })
                    .takeUntil(this.mouseUp$);
            })
            // .subscribe((value: MovingItem) => {
            //     console.info('in subscribe')
            //     const {item, xCoordinate} = value;
            //     if (xCoordinate < 0) {
            //         item.removeContentTransition();
            //         item.moveContentTo(xCoordinate);
            //         item.scaleDone((-xCoordinate - 20) / 50);
            //     }
            // });
    }

    /**
      * Dom Event Handlers
      */
    touchStartHandler() {
        console.info('touch start');
    }

    touchMoveHandler() {
        console.info('touch move');
    }

    mouseDownHandler(item: TodoView, evt: MouseEvent) {
        this.mouseObserver.next({item, xCoordinate: evt.clientX});
    }
}
