import React from 'react'
import "./LegendTag.css"

const LegendTag = (props) => {
  return (
    <div>
         <fieldset className="border p-2 extra">
                  <legend className="float-none w-auto p-2">
                    {props.title}
                  </legend>
                  <textarea>{props.textarea}</textarea>
                </fieldset>
    </div>
  )
}

export default LegendTag