import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BlogPostCard1.module.css";

export type BlogPostCard1Type = {
  className?: string;
  image?: string;
  author?: string;
  heading?: string;
  supportingText?: string;
  tagName?: string;
  tagName1?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
};

const BlogPostCard1: FunctionComponent<BlogPostCard1Type> = ({
  className = "",
  image,
  author,
  heading,
  propMinWidth,
  supportingText,
  tagName,
  propMinWidth1,
  propMinWidth2,
  propBackgroundColor,
  tagName1,
  propColor,
}) => {
  const heading1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const tagName3Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const badge2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const badgeBase3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const tagName4Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={[styles.blogPostCard, className].join(" ")}>
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.content}>
        <div className={styles.headingAndText}>
          <div className={styles.author}>{author}</div>
          <div className={styles.headingAndIcon}>
            <h2 className={styles.heading} style={heading1Style}>
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
          <div className={styles.badge}>
            <div className={styles.badgeBase}>
              <div className={styles.tagName} style={tagName3Style}>
                {tagName}
              </div>
            </div>
          </div>
          <div className={styles.badge1} style={badge2Style}>
            <div className={styles.badgeBase1} style={badgeBase3Style}>
              <div className={styles.tagName1} style={tagName4Style}>
                {tagName1}
              </div>
            </div>
          </div>
          <div className={styles.badge2}>
            <div className={styles.badgeBase2}>
              <div className={styles.text}>Presentation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard1;
