import React from "react";
import styles from "./PostCard.module.css";
import PropTypes from "prop-types";

const PostCard = ({ title, points, by, comments, url }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.points}>
        {points} by {by} | {comments}
      </div>
      <div>
        <a href={url} className={styles.readmore}>
          Readmore
        </a>
        <button className={styles.remove}>Remove</button>
      </div>
    </div>
  );
};

PostCard.propTypes = PostType;

export const PostType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  points: PropTypes.any.isRequired,
  by: PropTypes.string.isRequired,
  commnents: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
});

export default Hit;
