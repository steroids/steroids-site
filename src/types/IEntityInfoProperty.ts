export interface IEntityInfoProperty {
    name: string,
    description: string,
    required: boolean,
    type: string,
    example: string,
    parameters?: IEntityInfoProperty[],
}
