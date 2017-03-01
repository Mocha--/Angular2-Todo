interface TodoC {
    task?: string;
    isCompleted?: boolean;
}

export class Todo {
    public task: string;
    public isCompleted: boolean;
    public id: number = Date.now();

    constructor({task = '', isCompleted = false}: TodoC = {}) {
        this.task = task;
        this.isCompleted = isCompleted;
    }

    clear(): void {
        this.task = '';
    }

    toggleIsCompleted(): void {
        this.isCompleted = !this.isCompleted;
    }
}
