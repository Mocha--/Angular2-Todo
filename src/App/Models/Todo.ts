export class Todo {
    public task: string = '';
    public isCompleted: boolean = false;
    public id: number = Date.now();

    constructor(task: string, isCompleted: boolean) {
        this.task = task;
        this.isCompleted = isCompleted;
    }
}
