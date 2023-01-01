/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import { React, useState, useEffect } from 'react'
import { useRouter } from 'next/router';

const myaccount = () => {
    const router = useRouter()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            router.push('/')
        }
    },[])
    return (
        <div className='h-screen'>myaccount</div>
    )
}

export default myaccount