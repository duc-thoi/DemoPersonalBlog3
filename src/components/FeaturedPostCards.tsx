import { FunctionComponent } from "react";
import styles from "./FeaturedPostCards.module.css";

export type FeaturedPostCardsType = {
  className?: string;
  theNewYorkTimesHref: string;
  theNewYorkTimes?: string;
  image?: string;
  supportingText?: string;
  supportingText1?: string;
};

const FeaturedPostCards: FunctionComponent<FeaturedPostCardsType> = ({
  className = "",
  theNewYorkTimesHref,
  theNewYorkTimes,
  image,
  supportingText,
  supportingText1,
}) => {
  return (
    <div className={[styles.featuredPostCards, className].join(" ")}>
      <div className={styles.supportingText}>
        {`Our first example is from `}
        <a
          className={styles.theNewYorkTimes}
          href={theNewYorkTimesHref}
          target="_blank"
        >
          <span className={styles.theNewYork}>{theNewYorkTimes}</span>
        </a>
        . This screen utilizes a hierarchical grid to create a newspaper-like
        reading experience. At desktop screen size, two main columns make up the
        hierarchical grid. The most important news story takes up the most space
        in the grid, the left column, followed by secondary and tertiary
        stories, which take up the smaller column and modules on the right.
      </div>
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.supportingTextWrapper}>
        <div className={styles.supportingText1}>{supportingText}</div>
      </div>
      <b className={styles.supportingText2}>{supportingText1}</b>
    </div>
  );
};

export default FeaturedPostCards;
