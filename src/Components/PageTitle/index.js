import React from 'react'

const PageTitle = (props) => {
    return (
        <div id='page-title-container'>
            <h1 id='about-title'>{props.title}</h1>
            <span id='about-underline'></span>
        </div>
    )
}

export default PageTitle