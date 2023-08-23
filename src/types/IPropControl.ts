export interface IPropControl {
    id: number,
    label: string,
    enabled: boolean,
    propPath?: any,
    addition?: {
        toAddition?: any,
        extraName?: string,
        propPath: any,
    },
}
