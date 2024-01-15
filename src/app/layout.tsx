"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Sidebar from '@/components/Layout/Sidebar'
import MenuBarMobile from '@/components/Layout/MenuBarMobile'

import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 
{ // Mobile sidebar visibility state
const [showSidebar, setShowSidebar] = useState(false);
 
  return (
    <>
    <html lang="en">
      <body className="min-h-screen bg-slate-50 ">
        <Nav />
        <div className="min-h-screen">
                <div className="flex">
                    <MenuBarMobile setter={setShowSidebar} />
                    <Sidebar show={showSidebar} setter={setShowSidebar} />
                    <div className="flex flex-col p-12 flex-grow w-screen md:w-full min-h-screen">
                        {children}
                    </div>
                </div>
            </div>
        </body>
    </html>
    </>
  )
}
