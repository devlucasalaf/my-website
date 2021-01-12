import React, {useState} from 'react'

const NextPageBtn = (props) => {

  const [nextPage, setNextPage] = useState(false)

  const nextPageEffect = () => {    
    setNextPage(!nextPage)
    setTimeout(() => {
      location.href = props.path
    }, 1000)
  }

    return (
        <div  onClick={nextPageEffect} className='next-page-wrapper'>
          <div id='next-page-name'>
            <span id={nextPage === true ? 'go-out' : ''} className={nextPage === false ? 'next-off' : 'next-on'}>{props.pageName}</span>
          </div>          
          <div id='next-btn'>
            <div id={nextPage === false ? 'next-line-1-before' : 'next-line-1-after'} className='next-btn-lines'></div>
            <div id={nextPage === false ? 'next-line-2-before' : 'next-line-2-after'} className='next-btn-lines'></div>
          </div>
        </div>
    )
}

export default NextPageBtn