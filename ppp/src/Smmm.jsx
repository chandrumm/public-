import React from 'react'

const Smmm = (props) => {
  return (
    <div>
    {props.a}
    {props.b.map((v)=>{
      return(
        <div>
          {
            v.name
          }
           
          {
            v.id 
          }
          {

          }
        </div>
      )
    })}
    {
      props.sum
    }
    {
      props.as
    }
      
    
    </div>
  )
}

export default Smmm
