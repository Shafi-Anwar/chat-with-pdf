'use client'

import React from 'react'
import { Button } from './ui/button'
import { PlusCircleIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

function PlaceholderDocument() {
    const router = useRouter(); 

    const handleClick = () => {
        //check user in FREE tier and if theyre over the file limit, push to upgrade page
        router.push("/dashboard/upload");
    }
  return( 
    <Button
    onClick={handleClick} className='flex flex-col items-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400'>
    <p>
        <PlusCircleIcon className='h-16 w-16' />
        Add a document
    </p>
  </Button>
  )
}

export default PlaceholderDocument