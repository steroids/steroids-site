import {FunctionComponent} from 'react';

export interface IDemo {
    component: FunctionComponent,
    title: string,
    sourceUrl: string,
    id: string;
    anchor: {
        id: string,
        label: string,
    }
}
