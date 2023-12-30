import React from 'react'

export default function Test() {
  return (
    <div
      className="box"
      style={{ height: '1200px', backgroundColor: 'salmon' }}
    >
      <div style={{ height: '500px', backgroundColor: 'seagreen' }}></div>{' '}
      <button
        className="btn btn-info"
        onClick={() => {
          window.scrollTo(0, 500)
        }}
      >
        top
      </button>
    </div>
  )
}
