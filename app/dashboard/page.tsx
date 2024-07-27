import Documents from '@/components/Documents'
import React from 'react'

export default function Dashboard() {
  return (
    <div className='h-full max-w-7xl mx-auto'>
      <h1 className='text-3xl bg-gray-100 font-extralight text-green-600 p-5'>My Documents</h1>
      <Documents />
    </div>
  )
}

