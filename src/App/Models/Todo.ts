export class Todo {
    public task: string = '';
    public isCompleted: boolean = false;

    constructor(task: string, isCompleted: boolean) {
        this.task = task;
        this.isCompleted = isCompleted;
    }
}
