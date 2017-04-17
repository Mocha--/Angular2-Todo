import { Component, Input, OnInit, OnChanges, OnDestroy, trigger, state, style, transition, animate} from '@angular/core';
import { Todo } from '../../Models/Todo';
import './TodoList.component.styl';

interface TodoViewStyle {
    transition: string;
    transform: string;
}

class TodoView {
    contentStyle: TodoViewStyle = {transition: 'none', transform: 'translate3d(0, 0, 0)'};
    doneStyle: TodoViewStyle = {transition: 'none', transform: 'scale3d(0, 0, 1)'};

    constructor(private task: string = '', private isCompleted: boolean = false) { }

    moveContentTo(x: number) {
        this.contentStyle.transform = `translate3d(${x}px, 0, 0)`;
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
export class TodoList implements OnInit, OnDestroy {
    @Input() todos: Todo[];
    todoViewList: TodoView[];
    movingItem: TodoView;
    initClickHorizontalPos: number;

    constructor() {
        this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
        this.mouseUpHandler = this.mouseUpHandler.bind(this);
    }

    /**
      * Lifecycle hooks
      */
    ngOnInit() {
        document.addEventListener('mousemove', this.mouseMoveHandler);
        document.addEventListener('mouseup', this.mouseUpHandler);

        this.todoViewList = this.todos.map((elm: Todo) => {
            const {task, isCompleted} = elm;
            return new TodoView(task, isCompleted);
        });
    }

    ngOnDestroy() {
        document.removeEventListener('mousemove', this.mouseMoveHandler);
        document.removeEventListener('mouseup', this.mouseUpHandler);
    }

    /**
      * Dom event handlers
      */
    touchStartHandler() {
        console.info('touch start');
    }

    touchMoveHandler() {
        console.info('touch move');
    }

    mouseDownHandler(item: TodoView, evt: MouseEvent) {
        const {clientX} = evt;
        this.movingItem = item;
        this.movingItem.removeContentTransition();
        this.initClickHorizontalPos = clientX;
    }

    mouseMoveHandler(evt: MouseEvent) {
        if (this.movingItem) {
            const {clientX} = evt;
            const deltaX = clientX - this.initClickHorizontalPos;
            this.movingItem.moveContentTo(deltaX);
            deltaX < 0 && this.movingItem.scaleDone((-deltaX - 30) / 30);
        }
    }

    mouseUpHandler() {
        console.info('mouse up, if you see this msg twice, plz remove event listener');
        this.movingItem.moveContentTo(0)
        this.movingItem.addContentTransition();
        this.movingItem.restoreDone();
        this.movingItem = null;
        this.initClickHorizontalPos = 0;
    }
}
