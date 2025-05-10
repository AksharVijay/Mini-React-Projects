import React, { useState } from 'react'

const DigitalClock = () => {

    const [time, setTime] = useState(Date.now())
  return (
    <div>
        <span>{time}</span>
    </div>
  )
}

export default DigitalClock;