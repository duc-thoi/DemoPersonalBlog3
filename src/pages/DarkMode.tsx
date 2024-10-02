import { FunctionComponent } from "react";
import Header from "../components/Header";
import Section1 from "../components/Section1";
import FrameComponent2 from "../components/FrameComponent2";
import BlogPostCard4 from "../components/BlogPostCard4";
import BlogPostCard3 from "../components/BlogPostCard3";
import BlogPostCard5 from "../components/BlogPostCard5";
import Pagination from "../components/Pagination";
import styles from "./DarkMode.module.css";

const DarkMode: FunctionComponent = () => {
  return (
    <div className={styles.darkMode}>
      <main className={styles.darkMode1}>
        <div className={styles.headerSection}>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.headingAndSupportingText}>
                <div className={styles.headingAndSubheading}>
                  <div className={styles.subheading}>Our blog</div>
                  <div className={styles.heading}>Stories and interviews</div>
                </div>
                <div className={styles.supportingText}>
                  Subscribe to learn about new product features, the latest in
                  technology, solutions, and updates.
                </div>
              </div>
              <div className={styles.emailCapture}>
                <div className={styles.inputField}>
                  <div className={styles.inputFieldBase}>
                    <div className={styles.inputWithLabel}>
                      <div className={styles.label}>Email</div>
                      <div className={styles.input}>
                        <div className={styles.content1}>
                          <img
                            className={styles.mailIcon}
                            alt=""
                            src="/mail.svg"
                          />
                          <div className={styles.text}>Enter your email</div>
                        </div>
                        <img
                          className={styles.helpIcon}
                          alt=""
                          src="/help-icon.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.hintText}>
                      {`We care about your data in our `}
                      <span className={styles.privacyPolicy}>
                        privacy policy
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.button}>
                  <div className={styles.buttonBase}>
                    <div className={styles.text1}>Subscribe</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Header />
        <section className={styles.frameParent}>
          <div className={styles.containerWrapper}>
            <div className={styles.container1}>
              <b className={styles.theBlog}>THE BLOG</b>
            </div>
          </div>
          <Section1 />
          <FrameComponent2 />
          <div className={styles.frameWrapper}>
            <div className={styles.headingAndContentParent}>
              <div className={styles.headingAndContent}>
                <h2 className={styles.heading1}>All blog posts</h2>
                <div className={styles.content2}>
                  <div className={styles.row}>
                    <div className={styles.blogPostCard}>
                      <img
                        className={styles.imageIcon}
                        rows={12}
                        cols={19}
                        alt=""
                        src="/image-41@2x.png"
                      />
                      <div className={styles.content3}>
                        <div className={styles.headingAndSubheading}>
                          <div className={styles.author}>
                            Sunday , 1 Jan 2023
                          </div>
                          <div className={styles.headingAndIcon}>
                            <h2 className={styles.heading2}>
                              Bill Walsh leadership lessons
                            </h2>
                            <input
                              className={styles.iconWrap}
                              type="checkbox"
                            />
                          </div>
                          <div className={styles.supportingText1}>
                            Like to know the secrets of transforming a 2-14 team
                            into a 3x Super Bowl winning Dynasty?
                          </div>
                        </div>
                        <div className={styles.categories}>
                          <div className={styles.badge}>
                            <div className={styles.badgeBase}>
                              <div className={styles.text2}>Leadership</div>
                            </div>
                          </div>
                          <div className={styles.badge1}>
                            <div className={styles.badgeBase1}>
                              <div className={styles.text2}>Management</div>
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
                    <BlogPostCard4
                      image="/image-51@2x.png"
                      heading="PM mental models"
                      supportingText="Mental models are simple expressions of complex processes or relationships."
                      text="Product"
                      text1="Research"
                      text2="Frameworks"
                    />
                    <BlogPostCard3
                      propFlex="unset"
                      propMinWidth="unset"
                      propAlignSelf="unset"
                      image="/image-61@2x.png"
                      propHeight="240px"
                      heading="What is Wireframing?"
                      propMinWidth1="198px"
                      supportingText="Introduction to Wireframing and its Principles. Learn from the best in the industry."
                    />
                  </div>
                  <div className={styles.row}>
                    <BlogPostCard3
                      propFlex="unset"
                      propMinWidth="unset"
                      propAlignSelf="unset"
                      image="/image-71@2x.png"
                      propHeight="240px"
                      heading="How collaboration makes us better designers"
                      propMinWidth1="224px"
                      supportingText="Collaboration can make our teams stronger, and our individual designs better."
                    />
                    <BlogPostCard4
                      propAlignSelf="unset"
                      image="/image-81@2x.png"
                      heading="Our top 10 Javascript frameworks to use"
                      propMinWidth="197px"
                      supportingText="JavaScript frameworks make development easy with extensive features and functionalities."
                      propFlex="1"
                      propMinWidth1="113px"
                      propBackgroundColor="#ecfdf3"
                      text="Software Development"
                      propColor="#037a48"
                      propBackgroundColor1="#fdf2fa"
                      text1="Tools"
                      propColor1="#c11574"
                      propDisplay="unset"
                      propMinWidth2="unset"
                      propFlex1="unset"
                      propMinWidth3="unset"
                      propBackgroundColor2="#fff1f3"
                      text2="SaaS"
                      propColor2="#c11048"
                    />
                    <BlogPostCard5 image="/image-9@2x.png" />
                  </div>
                </div>
              </div>
              <Pagination
                propBorderTop="1px solid rgba(234, 236, 240, 0.34)"
                arrowLeft="/arrowleft1.svg"
                propColor="#efefef"
                propColor1="#112211"
                propColor2="#efefef"
                propColor3="#efefef"
                propColor4="#efefef"
                propColor5="#efefef"
                propColor6="#efefef"
                propColor7="#efefef"
                propColor8="#efefef"
                arrowRight="/arrowright1.svg"
              />
            </div>
          </div>
        </section>
        <section className={styles.footer}>
          <div className={styles.container2}>
            <div className={styles.div}>© 2023</div>
            <div className={styles.menu}>
              <a className={styles.twitter}>{`Twitter `}</a>
              <h3 className={styles.linkedin}>LinkedIn</h3>
              <h3 className={styles.email}>Email</h3>
              <h3 className={styles.rssFeed}>RSS feed</h3>
              <h3 className={styles.addToFeedly}>Add to Feedly</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DarkMode;
