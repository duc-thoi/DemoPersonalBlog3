import { FunctionComponent } from "react";
import BlogPostCard from "./BlogPostCard";
import BlogPostCard1 from "./BlogPostCard1";
import Pagination from "./Pagination";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.headingAndContentParent, className].join(" ")}>
      <div className={styles.headingAndContent}>
        <h2 className={styles.heading}>All blog posts</h2>
        <div className={styles.content}>
          <div className={styles.row}>
            <div className={styles.blogPostCard}>
              <img
                className={styles.imageIcon}
                loading="lazy"
                alt=""
                src="/image-41@2x.png"
              />
              <div className={styles.content1}>
                <div className={styles.headingAndText}>
                  <div className={styles.author}>Alec Whitten • 1 Jan 2023</div>
                  <div className={styles.headingAndIcon}>
                    <h2 className={styles.heading1}>
                      Bill Walsh leadership lessons
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
                  <div className={styles.supportingText}>
                    Like to know the secrets of transforming a 2-14 team into a
                    3x Super Bowl winning Dynasty?
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
                      <div className={styles.text2}>Presentation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BlogPostCard
              image="/image-51@2x.png"
              author="Demi WIlkinson • 1 Jan 2023"
              heading="PM mental models"
              supportingText="Mental models are simple expressions of complex processes or relationships."
              tagName="Product"
              tagName1="Research"
              tagName2="Frameworks"
            />
            <BlogPostCard1
              image="/image-61@2x.png"
              author="Candice Wu • 1 Jan 2023"
              heading="What is Wireframing?"
              supportingText="Introduction to Wireframing and its Principles. Learn from the best in the industry."
              tagName="Design"
              tagName1="Research"
            />
          </div>
          <div className={styles.row}>
            <BlogPostCard1
              image="/image-71@2x.png"
              author="Natali Craig • 1 Jan 2023"
              heading="How collaboration makes us better designers"
              propMinWidth="224px"
              supportingText="Collaboration can make our teams stronger, and our individual designs better."
              tagName="Design"
              propMinWidth1="48px"
              propMinWidth2="54px"
              propBackgroundColor="#eef4ff"
              tagName1="Research"
              propColor="#3538cd"
            />
            <BlogPostCard
              image="/image-81@2x.png"
              author="Drew Cano • 1 Jan 2023"
              heading="Our top 10 Javascript frameworks to use"
              propMinWidth="197px"
              supportingText="JavaScript frameworks make development easy with extensive features and functionalities."
              propFlex="1"
              propMinWidth1="113px"
              propBackgroundColor="#ecfdf3"
              tagName="Software Development"
              propColor="#037a48"
              propBackgroundColor1="#fdf2fa"
              tagName1="Tools"
              propColor1="#c11574"
              propDisplay="unset"
              propMinWidth2="unset"
              propFlex1="unset"
              propMinWidth3="unset"
              propBackgroundColor2="#fff1f3"
              tagName2="SaaS"
              propColor2="#c11048"
            />
            <BlogPostCard1
              image="/image-9@2x.png"
              author="Orlando Diggs • 1 Jan 2023"
              heading="Podcast: Creating a better CX Community"
              propMinWidth="224px"
              supportingText="Starting a community doesn’t need to be complicated, but how do you get started?"
              tagName="Podcasts"
              propMinWidth1="64px"
              propMinWidth2="95px"
              propBackgroundColor="#f8f9fc"
              tagName1="Customer Success"
              propColor="#363e72"
            />
          </div>
        </div>
      </div>
      <Pagination arrowLeft="/arrowleft.svg" arrowRight="/arrowright.svg" />
    </div>
  );
};

export default FrameComponent;
