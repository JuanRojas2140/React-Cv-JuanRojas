import React from 'react'
import CardV from './CardV'
import "./Experience.css"

const Experience = ({experience}) => {
  return (
    <>
        <h2 className='c__expereince-title'>Experience</h2>
        {experience.map((experience) =>(
            <CardV item={experience} />
        ))}
    </>
  )
}

export default Experience
