import React from 'react'

const NoRecordFound = () => {
  return (
    <div>
      
      <div className="flex items-center flex-col justify-center w-full h-[100vh]">
                <img src="../page_not_found.png" alt=""/>
                <h1 className="mt-14 text-4xl text-[#757575] font-bold">
                No <span className="theme-color">Record</span> Found
          </h1>
            </div>
    </div>
  )
}

export default NoRecordFound
