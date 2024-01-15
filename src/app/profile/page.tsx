"use client";
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type UserData = {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    // Add other properties if needed
  };

export default function ProfilePage() {
const router= useRouter()
const [data, setData] = useState<UserData>({});

const getUserDetails = async()=>{
    const res= await axios.get("/api/users/userinfo")
    console.log("Data:",res.data);
    setData(res.data.data)
    return data;
}

useEffect(()=>{
getUserDetails()
})

  return (
<div className="bg-white overflow-hidden shadow rounded-lg border">
    <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg text-teal-800 leading-6 font-medium">
            User Profile
        </h3>
        
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Full name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {data.firstName} {data.lastName}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {data.email}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Phone number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {data.phone}
                </dd>
            </div>
            
        </dl>
    </div>
</div>  )
}
