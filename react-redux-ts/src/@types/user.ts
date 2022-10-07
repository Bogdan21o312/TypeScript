interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        suite: string,
        city: string,
        zipcode: string | number,
        geo: {
            lat: string | number,
            lng: string | number,
        }
    }
    phone: number | string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string,
    }
}

export interface UserState {
    users: User[],
    loading: boolean,
    error: null | string
}

export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS,
}

interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    payload: any[]
}

interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR,
    payload: string
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction