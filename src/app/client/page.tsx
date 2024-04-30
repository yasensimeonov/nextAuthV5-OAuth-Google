"use client"

import { User } from "@/lib/definitions"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

export default function Page() {
    console.log('Client Side Rendering');
    const { data: session, update } = useSession();

    // useState and useEffect are used to only render the UI
    // after the session is retrieved
    const [user, setUser] = useState<User>({} as User);

    useEffect(() => {
        if(session && session.user)
        {
            setUser(session.user as User)
            console.log(session.user)
        }
    }, [session])

    return (
        <div>
            <h1>Client Side Rendering Page</h1>
            <h2>Unavailable without auth</h2>
            <br/>
            <button onClick={() => {
                // using update() called from the useSession hook
                update({...user, name: 'Client-Man'});
            }}>
                Client Side Update
            </button>
        </div>
    )
}
