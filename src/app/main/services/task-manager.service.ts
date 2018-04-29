import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Injectable()
export class TaskManagerService {

    constructor() { }

    waitAll(objs: any[], taskFunction) {
        const observableBatch = [];

        for (const idx in objs) {
            const task = taskFunction(objs[idx]);
            observableBatch.push(task);
        }

        return forkJoin(observableBatch);
    }

}
