import React from "react";
import styles from "./Hit.module.css";
import PropTypes from "proptypes";

const Hit = ({ hit }) => {
  return (
    <div className={styles.card}>
      <div>
        <div className={styles.title}>{hit.title}</div>
        <div className={styles.points}>
          {hit.points} by {hit.author} | {hit.num_comments}
        </div>
      </div>
      <div>
        <a href={hit.url} className={styles.readmore}>
          Read More
        </a>
        <button className={styles.remove}>Remove</button>
      </div>
    </div>
  );
};

export const HitType = PropTypes.shape({
  objectId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  num_commnents: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
});

Hit.propTypes = HitType;

export default Hit;
