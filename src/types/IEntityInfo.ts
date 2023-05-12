import {IEntityInfoProperty} from './IEntityInfoProperty';

export interface IEntityInfo {
    name: string,
    moduleName: string,
    title: string,
    description: string,
    tags: { [key: string]: string },
    defaultProps?: object,
    extends?: string[],
    properties?: IEntityInfoProperty[],
    methods?: IEntityInfoProperty[],
}
