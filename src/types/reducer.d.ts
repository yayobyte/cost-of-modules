export interface Store {
    root: RootReducerType,
} 

export interface RootReducerType {
    query: string,
    results: Array<{[Key: string]: any}>,
    loading: boolean,
    message: string | null,
    version: string | null,
    packageName: string | null,
    userSelectedPackage: string | null,
}

export interface ReducerActionType {
    type: string,
    payload: any,
}