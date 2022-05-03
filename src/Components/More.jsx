import React from 'react'
import CardV from "./CardV"
import "./More.scss"

export default function More({languages, habilities, volunteer}){
  return (
      <>    
        <div className='c__more'>
        <div className='c__more-leng'>
        <h2>Languages</h2>
        <p>-{languages.language1}</p>
        <p>-{languages.language2}</p>
        <p>-{languages.language3}</p>
        </div>
       
        <div className='c__more-sk'>
            <h2>Skills</h2>
            <p>-{habilities.hability1}</p>
            <p>-{habilities.hability2}</p>
            <p>-{habilities.hability3}</p>
            
        </div>
        
        </div>
       </> 
  )
}
