import { FunctionComponent } from "react";
import styles from "./Section.module.css";

export type SectionType = {
  className?: string;
};

const Section: FunctionComponent<SectionType> = ({ className = "" }) => {
  return (
    <section className={[styles.section, className].join(" ")}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Recent blog posts</h2>
        <div className={styles.content}>
          <div className={styles.blogPostCard}>
            <img
              className={styles.imageIcon}
              loading="lazy"
              alt=""
              src="/image1@2x.png"
            />
            <div className={styles.content1}>
              <div className={styles.headingAndText}>
                <div className={styles.author}>Olivia Rhye • 1 Jan 2023</div>
                <div className={styles.headingAndIcon}>
                  <h2 className={styles.heading1}>UX review presentations</h2>
                  <div className={styles.iconWrap}>
                    <img
                      className={styles.arrowUpRightIcon}
                      loading="lazy"
                      alt=""
                      src="/arrowupright.svg"
                    />
                  </div>
                </div>
                <div className={styles.supportingText}>
                  How do you create compelling presentations that wow your
                  colleagues and impress your managers?
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
          <div className={styles.column}>
            <div className={styles.blogPostCard1}>
              <img
                className={styles.imageIcon1}
                loading="lazy"
                alt=""
                src="/image-11@2x.png"
              />
              <div className={styles.content2}>
                <div className={styles.headingAndText1}>
                  <div className={styles.author}>
                    Phoenix Baker • 1 Jan 2023
                  </div>
                  <div className={styles.headingAndText2}>
                    <div className={styles.heading2}>
                      Migrating to Linear 101
                    </div>
                    <div className={styles.supportingText}>
                      Linear helps streamline software projects, sprints, tasks,
                      and bug tracking. Here’s how to get...
                    </div>
                  </div>
                </div>
                <div className={styles.categories1}>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase3}>
                      <div className={styles.text}>Design</div>
                    </div>
                  </div>
                  <div className={styles.badge4}>
                    <div className={styles.badgeBase2}>
                      <div className={styles.text1}>Research</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.blogPostCard1}>
              <img
                className={styles.imageIcon1}
                loading="lazy"
                alt=""
                src="/image-22@2x.png"
              />
              <div className={styles.content2}>
                <div className={styles.headingAndText1}>
                  <div className={styles.author}>Lana Steiner • 1 Jan 2023</div>
                  <div className={styles.headingAndText2}>
                    <div className={styles.heading2}>
                      Building your API Stack
                    </div>
                    <div className={styles.supportingText}>
                      The rise of RESTful APIs has been met by a rise in tools
                      for creating, testing, and manag...
                    </div>
                  </div>
                </div>
                <div className={styles.categories2}>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase5}>
                      <div className={styles.text}>Design</div>
                    </div>
                  </div>
                  <div className={styles.badge4}>
                    <div className={styles.badgeBase2}>
                      <div className={styles.text1}>Research</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
