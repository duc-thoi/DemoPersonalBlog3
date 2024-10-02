import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BlogPostCard.module.css";

export type BlogPostCardType = {
  className?: string;
  image?: string;
  author?: string;
  heading?: string;
  supportingText?: string;
  tagName?: string;
  tagName1?: string;
  tagName2?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propFlex?: CSSProperties["flex"];
  propMinWidth1?: CSSProperties["minWidth"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propColor1?: CSSProperties["color"];
  propDisplay?: CSSProperties["display"];
  propMinWidth2?: CSSProperties["minWidth"];
  propFlex1?: CSSProperties["flex"];
  propMinWidth3?: CSSProperties["minWidth"];
  propBackgroundColor2?: CSSProperties["backgroundColor"];
  propColor2?: CSSProperties["color"];
};

const BlogPostCard: FunctionComponent<BlogPostCardType> = ({
  className = "",
  image,
  author,
  heading,
  propMinWidth,
  supportingText,
  propFlex,
  propMinWidth1,
  propBackgroundColor,
  tagName,
  propColor,
  propBackgroundColor1,
  tagName1,
  propColor1,
  propDisplay,
  propMinWidth2,
  propFlex1,
  propMinWidth3,
  propBackgroundColor2,
  tagName2,
  propColor2,
}) => {
  const headingStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const badgeStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth1,
    };
  }, [propFlex, propMinWidth1]);

  const badgeBaseStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const tagNameStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const badgeBase1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const tagName1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
      display: propDisplay,
      minWidth: propMinWidth2,
    };
  }, [propColor1, propDisplay, propMinWidth2]);

  const badge1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
      minWidth: propMinWidth3,
    };
  }, [propFlex1, propMinWidth3]);

  const badgeBase2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const tagName2Style: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  return (
    <div className={[styles.blogPostCard, className].join(" ")}>
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.content}>
        <div className={styles.headingAndText}>
          <div className={styles.author}>{author}</div>
          <div className={styles.headingAndIcon}>
            <h2 className={styles.heading} style={headingStyle}>
              {heading}
            </h2>
            <div className={styles.iconWrap}>
              <img
                className={styles.arrowUpRightIcon}
                loading="lazy"
                alt=""
                src="/arrowupright.svg"
              />
            </div>
          </div>
          <div className={styles.supportingText}>{supportingText}</div>
        </div>
        <div className={styles.categories}>
          <div className={styles.badge} style={badgeStyle}>
            <div className={styles.badgeBase} style={badgeBaseStyle}>
              <div className={styles.tagName} style={tagNameStyle}>
                {tagName}
              </div>
            </div>
          </div>
          <div className={styles.badge1}>
            <div className={styles.badgeBase1} style={badgeBase1Style}>
              <div className={styles.tagName1} style={tagName1Style}>
                {tagName1}
              </div>
            </div>
          </div>
          <div className={styles.badge2} style={badge1Style}>
            <div className={styles.badgeBase2} style={badgeBase2Style}>
              <div className={styles.tagName} style={tagName2Style}>
                {tagName2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
