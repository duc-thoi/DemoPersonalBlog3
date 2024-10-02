import { FunctionComponent } from "react";
import BlogPostCard3 from "./BlogPostCard3";
import styles from "./Section1.module.css";

export type Section1Type = {
  className?: string;
};

const Section1: FunctionComponent<Section1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.section, className].join(" ")}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Recent blog posts</h2>
        <div className={styles.content}>
          <BlogPostCard3
            image="/image1@2x.png"
            heading="UX review presentations"
            supportingText="How do you create compelling presentations that wow your colleagues and impress your managers?"
          />
          <div className={styles.column}>
            <div className={styles.blogPostCard}>
              <img
                className={styles.imageIcon}
                loading="lazy"
                alt=""
                src="/image-11@2x.png"
              />
              <div className={styles.content1}>
                <div className={styles.headingAndText}>
                  <div className={styles.author}>Sunday , 1 Jan 2023</div>
                  <div className={styles.headingAndText1}>
                    <div className={styles.heading1}>
                      Migrating to Linear 101
                    </div>
                    <div className={styles.supportingText}>
                      Linear helps streamline software projects, sprints, tasks,
                      and bug tracking. Here’s how to get...
                    </div>
                  </div>
                </div>
                <div className={styles.categories}>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text}>Design</div>
                    </div>
                  </div>
                  <div className={styles.badge1}>
                    <div className={styles.badgeBase1}>
                      <div className={styles.text1}>Research</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.blogPostCard}>
              <img
                className={styles.imageIcon}
                loading="lazy"
                alt=""
                src="/image-22@2x.png"
              />
              <div className={styles.content1}>
                <div className={styles.headingAndText}>
                  <div className={styles.author}>Sunday , 1 Jan 2023</div>
                  <div className={styles.headingAndText1}>
                    <div className={styles.heading1}>
                      Building your API Stack
                    </div>
                    <div className={styles.supportingText}>
                      The rise of RESTful APIs has been met by a rise in tools
                      for creating, testing, and manag...
                    </div>
                  </div>
                </div>
                <div className={styles.categories1}>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase2}>
                      <div className={styles.text}>Design</div>
                    </div>
                  </div>
                  <div className={styles.badge1}>
                    <div className={styles.badgeBase1}>
                      <div className={styles.text1}>Research</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
