export interface IPropControl {
    id: number,
    label: string,
    enabled: boolean,
    path?: any,
    addition?: {
        toAddition?: any,
        extraName?: string,
        path: any,
    },
}
