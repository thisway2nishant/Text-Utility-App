import React from 'react'

export default function About(props) {
  return (
    <div className='container my-4 ' style={{border: props.mode==='light'?'2px solid black':'2px solid white', backgroundColor: props.mode==='light'?'#f0efef':'#212529', color: props.mode==='light'?'black':'white', borderRadius: '5px'}}>
      <h2 style={{width:"fit-content", margin: '8px auto'}}><strong>About Us</strong></h2>
      <p>
      Knowing the word count of a text can be important. For example, if an author has to write a minimum or maximum amount of words for an article, essay, report, story, book, paper, you name it. Text Utils will help to make sure its word count reaches a specific requirement or stays within a certain limit.
      </p>
      <p>
      To check word count, simply place your cursor into the text box above and start typing. You'll see the number of characters and words increase or decrease as you type, delete, and edit them. You can also copy and paste text from another program over into the online editor above.
      </p>
      <p><strong>Disclaimer: We strive to make our tools as accurate as possible but we cannot guarantee it will always be so.</strong></p>
    </div>
  )
}
