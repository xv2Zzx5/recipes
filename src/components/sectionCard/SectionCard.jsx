import "./SectionCard.css";
import SectionTitle from "../sectionTitle/SectionTitle";
import Line from "../line/Line"

import React from 'react'
import PropTypes from 'prop-types'

function SectionCard(props) {
  return (
    <section className={"section-card " + (props.reverse? "reverse": "")}>
      <SectionTitle title={props.title} />
      <div className="section-card__content">
        <div className="section-card__left">
          <div className="section-card__img">
            <img src={props.poster} alt="dish" />
            <div className="section-card__shadow"></div>
          </div>
        </div>
        <div className="section-card__right">
          <h3 dangerouslySetInnerHTML={{ __html: props.text }}></h3>
          <Line/>
          <p>{props.description}</p>
          <button>explore more</button>
        </div>
      </div>
    </section>
  );
}

SectionCard.propTypes = {
  reverse:PropTypes.bool,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default SectionCard

