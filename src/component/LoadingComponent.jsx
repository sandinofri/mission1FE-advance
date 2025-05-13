import React from 'react'

const LoadingComponent = () => {
  return (
    <>
    <div className='fixed inset-0 bg-black/50 flex justify-center items-center z-49'>
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>
    </>
  )
}

export default LoadingComponent