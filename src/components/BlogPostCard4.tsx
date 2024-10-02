import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BlogPostCard4.module.css";

export type BlogPostCard4Type = {
  className?: string;
  image?: string;
  heading?: string;
  supportingText?: string;
  text?: string;
  text1?: string;
  text2?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
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

const BlogPostCard4: FunctionComponent<BlogPostCard4Type> = ({
  className = "",
  propAlignSelf,
  image,
  heading,
  propMinWidth,
  supportingText,
  propFlex,
  propMinWidth1,
  propBackgroundColor,
  text,
  propColor,
  propBackgroundColor1,
  text1,
  propColor1,
  propDisplay,
  propMinWidth2,
  propFlex1,
  propMinWidth3,
  propBackgroundColor2,
  text2,
  propColor2,
}) => {
  const blogPostCard1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const heading3Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const badge3Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth1,
    };
  }, [propFlex, propMinWidth1]);

  const badgeBase4Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const badgeBase5Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
      display: propDisplay,
      minWidth: propMinWidth2,
    };
  }, [propColor1, propDisplay, propMinWidth2]);

  const badge4Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
      minWidth: propMinWidth3,
    };
  }, [propFlex1, propMinWidth3]);

  const badgeBase6Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const text2Style: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  return (
    <div
      className={[styles.blogPostCard, className].join(" ")}
      style={blogPostCard1Style}
    >
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.content}>
        <div className={styles.headingAndText}>
          <div className={styles.author}>Sunday , 1 Jan 2023</div>
          <div className={styles.headingAndIcon}>
            <h2 className={styles.heading} style={heading3Style}>
              {heading}
            </h2>
            <input className={styles.iconWrap} type="checkbox" />
          </div>
          <div className={styles.supportingText}>{supportingText}</div>
        </div>
        <div className={styles.categories}>
          <div className={styles.badge} style={badge3Style}>
            <div className={styles.badgeBase} style={badgeBase4Style}>
              <div className={styles.text} style={textStyle}>
                {text}
              </div>
            </div>
          </div>
          <div className={styles.badge1}>
            <div className={styles.badgeBase1} style={badgeBase5Style}>
              <div className={styles.text1} style={text1Style}>
                {text1}
              </div>
            </div>
          </div>
          <div className={styles.badge2} style={badge4Style}>
            <div className={styles.badgeBase2} style={badgeBase6Style}>
              <div className={styles.text} style={text2Style}>
                {text2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard4;
