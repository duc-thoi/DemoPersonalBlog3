import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BlogPostCard5.module.css";

export type BlogPostCard5Type = {
  className?: string;
  image?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const BlogPostCard5: FunctionComponent<BlogPostCard5Type> = ({
  className = "",
  propAlignSelf,
  image,
  propMinWidth,
  propDisplay,
  propMinWidth1,
}) => {
  const blogPostCard2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const heading4Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const text3Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  return (
    <div
      className={[styles.blogPostCard, className].join(" ")}
      style={blogPostCard2Style}
    >
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.content}>
        <div className={styles.headingAndText}>
          <div className={styles.author}>Sunday , 1 Jan 2023</div>
          <div className={styles.headingAndIcon}>
            <h2 className={styles.heading} style={heading4Style}>
              Podcast: Creating a better CX Community
            </h2>
            <input className={styles.iconWrap} type="checkbox" />
          </div>
          <div className={styles.supportingText}>
            Starting a community doesn’t need to be complicated, but how do you
            get started?
          </div>
        </div>
        <div className={styles.categories}>
          <div className={styles.badge}>
            <div className={styles.badgeBase}>
              <div className={styles.text}>Podcasts</div>
            </div>
          </div>
          <div className={styles.badge1}>
            <div className={styles.badgeBase1}>
              <div className={styles.text1} style={text3Style}>
                Customer Success
              </div>
            </div>
          </div>
          <div className={styles.badge2}>
            <div className={styles.badgeBase2}>
              <div className={styles.text2}>Presentation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard5;
