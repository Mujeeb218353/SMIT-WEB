import React from 'react'
import { Spinner } from "@material-tailwind/react";

const Loader = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <Spinner className="h-16 w-16 text-gray-[#0d6efd]" />;
    </div>
  )
}

export default Loader