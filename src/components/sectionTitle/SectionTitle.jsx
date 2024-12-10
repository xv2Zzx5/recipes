
import "./SectionTitle.css"

import React from 'react'
import PropTypes from 'prop-types'

function SectionTitle(props) {
  return (
    <h2 className = "section-title">
        {props.title}
    </h2>
  )
}

SectionTitle.propTypes = {title:PropTypes.string.isRequired}

export default SectionTitle
