import {AdapterUser} from "@auth/core/adapters";

export type User = {
    id: string
    email: string
    name : string
} & AdapterUser
