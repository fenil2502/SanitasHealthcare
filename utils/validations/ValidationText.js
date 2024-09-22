import React from 'react'

const ValidationText = (props) => {
    return (
        props.error?
        <div className="small-font-size mt-1 text-[#c00000]">{props.error}</div>
        :null
    )
}

export default ValidationText;
