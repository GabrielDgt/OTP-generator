import React, { useRef, useState } from 'react'
import { generateOTP } from '../helpers/OTPgenerator.js'
import BoxDigit from './BoxDigit.jsx'

const OTPgen = () => {
  const refAux = useRef(null)
  const [code, setCode] = useState(null)

  const handleClick = () => {
    const { current } = refAux
    const OTP = generateOTP(current.value)
    setCode(OTP)
  }
  console.log(code)
  return (
    <main>
      <h2>OTP Generator</h2>
      <form>
        <label htmlFor='text'>OTP Length</label>
        <input type='text' id='text' placeholder='Write your desired OTP length:' ref={refAux} />
      </form>
      <button onClick={handleClick}>Generate OTP</button>
      <section>
        {
          code.forEach(elem => {
            <BoxDigit digit={elem} />
          })
        }
      </section>
    </main>
  )
}

export default OTPgen
