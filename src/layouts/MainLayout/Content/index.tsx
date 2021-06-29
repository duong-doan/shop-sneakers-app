import React from 'react'

function Content(props: any) {
  return (
    <main className="main">
      {props.children}
    </main>
  )
}

export default Content
