/* eslint-disable no-unused-vars */
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import { useState } from 'react'

function App() {
  const [bookmarked, setBookMarked] = useState([])
  const [readingCount, setReadingCount] = useState(0);
  const handleBookMark = (blog) => {
    setBookMarked([...bookmarked, blog])

  }

  const handleMarkAsRead = (time, id) => {
    const newTime = readingCount + time;
    setReadingCount(newTime);
    handleRemoveFromBookmark(id)
  }

  const handleRemoveFromBookmark = (id) => {
    const remainignBookMark = bookmarked.filter((mark) => mark.id !== id)
    setBookMarked(remainignBookMark)
  }

  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex text-center">
        <div className="left-container w-[70%] ">

          <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
        <div className="right-container w-[30%] ">
          <h1>Reading time: {readingCount} </h1>
          <h1>Bookmark Count: {bookmarked.length}</h1>
          {
            bookmarked.map(marked => <p key={marked.id} className='bg-amber-400 p-2 shadow-blue-500 m-2 rounded-xl text-slate-900'>{marked.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
