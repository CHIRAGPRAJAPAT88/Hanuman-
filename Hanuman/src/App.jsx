import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className="cards">
        <div className="card">
            <img src="https://wallpapers.com/images/featured/lord-hanuman-hd-4vo187ifrqxrim0q.jpg" alt="mypic" className='card_img' width={300} />
            <div className="card_info">
                <span className='card_category'>HANUMAN CHALISHA</span>
                <h3 className='card_title'>JAI HANUMAN</h3>
                <a href="https://youtu.be/DCBnMovyZTY?si=J_bXH4YWj_47JTtO" target='_blank'>
                    <button>Watch Now</button>
                </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
