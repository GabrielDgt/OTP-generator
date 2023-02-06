import React from 'react'

const BoxDigit = ({ OTPcode }) => {
  if (!OTPcode) return

  const boxCode = OTPcode.map((elem, index) =>
    <div className='OTPbox' key={index}>{elem}</div>
  )

  return (
    <section className='OTPcontainer'>
      {boxCode}
    </section>
  )
}

export default BoxDigit
