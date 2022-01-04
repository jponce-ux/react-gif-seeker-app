import React from 'react'
import PropTypes from 'prop-types'

export  const  GifGridItem = ( {title, url}) => {
    return (
        <div  className="gifContainer">
            <img src={url} width="300" alt={title}/> 
            <h4>{title} </h4>                        
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
