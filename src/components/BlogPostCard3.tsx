import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BlogPostCard3.module.css";

export type BlogPostCard3Type = {
  className?: string;
  image?: string;
  heading?: string;
  supportingText?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const BlogPostCard3: FunctionComponent<BlogPostCard3Type> = ({
  className = "",
  propFlex,
  propMinWidth,
  propAlignSelf,
  image,
  propHeight,
  heading,
  propMinWidth1,
  supportingText,
}) => {
  const blogPostCardStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinWidth, propAlignSelf]);

  const imageIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const heading2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={[styles.blogPostCard, className].join(" ")}
      style={blogPostCardStyle}
    >
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src={image}
        style={imageIconStyle}
      />
      <div className={styles.content}>
        <div className={styles.headingAndText}>
          <div className={styles.author}>Sunday , 1 Jan 2023</div>
          <div className={styles.headingAndIcon}>
            <h2 className={styles.heading} style={heading2Style}>
              {heading}
            </h2>
            <input className={styles.iconWrap} type="checkbox" />
          </div>
          <div className={styles.supportingText}>{supportingText}</div>
        </div>
        <div className={styles.categories}>
          <div className={styles.badge}>
            <div className={styles.badgeBase}>
              <div className={styles.text}>Design</div>
            </div>
          </div>
          <div className={styles.badge1}>
            <div className={styles.badgeBase1}>
              <div className={styles.nestedBadge}>Research</div>
            </div>
          </div>
          <div className={styles.badge2}>
            <div className={styles.badgeBase2}>
              <div className={styles.text1}>Presentation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard3;
