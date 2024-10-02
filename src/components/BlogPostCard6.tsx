import { FunctionComponent } from "react";
import styles from "./BlogPostCard6.module.css";

export type BlogPostCard6Type = {
  className?: string;
  image?: string;
};

const BlogPostCard6: FunctionComponent<BlogPostCard6Type> = ({
  className = "",
  image,
}) => {
  return (
    <div className={[styles.blogPostCard, className].join(" ")}>
      <img
        className={styles.imageIcon}
        rows={12}
        cols={17}
        alt=""
        src={image}
      />
      <div className={styles.content}>
        <div className={styles.headingAndText}>
          <div className={styles.author}>Sunday , 1 Jan 2023</div>
          <div className={styles.headingAndIcon}>
            <h2 className={styles.heading}>Bill Walsh leadership lessons</h2>
            <input className={styles.iconWrap} type="checkbox" />
          </div>
          <div className={styles.supportingText}>
            Like to know the secrets of transforming a 2-14 team into a 3x Super
            Bowl winning Dynasty?
          </div>
        </div>
        <div className={styles.categories}>
          <div className={styles.badge}>
            <div className={styles.badgeBase}>
              <div className={styles.text}>Leadership</div>
            </div>
          </div>
          <div className={styles.badge1}>
            <div className={styles.badgeBase1}>
              <div className={styles.text}>Management</div>
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

export default BlogPostCard6;
