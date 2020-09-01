export interface StoreType {
    query: string,
    results: Array<{[Key: string]: any}>,
    loading: boolean,
    message: string | null,
}

export interface ReducerActionType {
    type: string,
    payload: any,
}