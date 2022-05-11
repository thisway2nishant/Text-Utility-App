import React from 'react'

export default function footer() {
  return (
    <div>
      <footer style={{backgroundColor: 'black', height: '200px', color: 'white', padding: '5px'}}>
         <div style={{display: 'flex'}}>
          <ul style={{listStyle: 'none'}}>
              <li><p>Site Map</p></li>
              <li><a href='/' style={{textDecoration: 'none', color: 'white'}}>Home</a></li>
              <li><a href='#about' style={{textDecoration: 'none', color: 'white'}}>About</a></li>
              <li><a href='/' style={{textDecoration: 'none', color: 'white'}}>Contact Us</a></li>
              <li><a href='/' style={{textDecoration: 'none', color: 'white'}}>Privacy Policy</a></li>
          </ul>
          <ul style={{listStyle: 'none', marginLeft: '125px'}}>
              <li><p>Follow us</p></li>
              <li><a href='/' style={{textDecoration: 'none', color: 'white'}}>Twitter</a></li>
              <li><a href='/' style={{textDecoration: 'none', color: 'white'}}>Instagram</a></li>
              <li><a href='/' style={{textDecoration: 'none', color: 'white'}}>Facebook</a></li>
          </ul>
         </div>
          <p className='mx-3'>All Rights Reserved. &copy;2022 Nishant Kumar</p>
      </footer>
    </div>
  )
}
