import React from "react";
import styles from "./PostCard.module.css";
import PropTypes from "prop-types";

const PostCard = ({ title, points, by, comments, url }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className="info">
        {points} by {by} | {comments}
      </div>
      <div>
        <a href={url} className="readmore">
          Readmore
        </a>
        <button className="delete">Delete</button>
      </div>
    </div>
  );
};

export const PostType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  points: PropTypes.any.isRequired,
  by: PropTypes.string.isRequired,
  commnents: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
});
