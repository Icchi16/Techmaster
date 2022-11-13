import React from "react";
import Hit, { HitType } from "../hit/Hit";
import styles from "./HitList.module.css";
import PropTypes from "proptypes";

const HitList = ({ hits }) => {
  return (
    <div className={styles.list}>
      {hits.map((hit) => (
        <Hit key={hit.objectID} hit={hit} />
      ))}
    </div>
  );
};

export const HitListType = PropTypes.arrayOf(HitType);

export default HitList;
