"use client"

import React from 'react'
import { Button } from "../../components/ui/button"
import { authClient } from "../../lib/auth-client"
import { auth } from "../../lib/auth"
import { redirect, useRouter } from "next/navigation"
import { headers } from "next/headers";

const Dashboard = () => {




    // const session = await auth.api.getSession({ headers: await headers() })

    // if (!session) {
    //     redirect("/")
    // }

    const signOutHanlder = async () => {
        const reponse = await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    redirect("/")
                },
            },
        });
    }
    return (
        <div className=' flex min-h-screen justify-center items-center'>

            <div className=' flex flex-col gap-3'>
                Dashboard

                <form onSubmit={signOutHanlder}>
                    <Button type='submit'>Logout</Button>
                </form>


            </div>



        </div>
    )
}

export default Dashboard
