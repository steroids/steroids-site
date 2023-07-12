export interface IPropControl<T> {
    id: number,
    label: string,
    params: T,
    enabled: boolean,
}
