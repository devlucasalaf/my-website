import React, {useState} from 'react'

const prevPageBtn = (props) => {

  const [prevPage, setPrevPage] = useState(false)

  const prevPageEffect = () => {    
    setPrevPage(!prevPage)
    setTimeout(() => {
      location.href = props.path
    }, 1000)
  }

    return (
        <div  onClick={prevPageEffect} className='prev-page-wrapper'>        
          <div id='prev-btn'>
            <div id={prevPage === false ? 'prev-line-1-before' : 'prev-line-1-after'} className='prev-btn-lines'></div>
            <div id={prevPage === false ? 'prev-line-2-before' : 'prev-line-2-after'} className='prev-btn-lines'></div>
          </div>
          <div id='prev-page-name'>
            <span id={prevPage === true ? 'go-out' : ''} className={prevPage === false ? 'prev-off' : 'prev-on'}>{props.pageName}</span>
          </div>  
        </div>
    )
}

export default prevPageBtn