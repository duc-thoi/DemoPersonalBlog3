import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Section from "../components/Section";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./LightMode.module.css";

const LightMode: FunctionComponent = () => {
  const navigate = useNavigate();

  const onToggleModeContainerClick = useCallback(() => {
    navigate("/dark-mode1");
  }, [navigate]);

  return (
    <div className={styles.lightMode}>
      <section className={styles.header}>
        <header className={styles.navbar}>
          <a className={styles.yourName}>Your Name</a>
          <div className={styles.menu}>
            <div className={styles.blog}>
              <a className={styles.blog1}>Blog</a>
            </div>
            <div className={styles.blog}>
              <a className={styles.blog1}>Projects</a>
            </div>
            <div className={styles.blog}>
              <a className={styles.blog1}>About</a>
            </div>
            <div className={styles.blog}>
              <a className={styles.newsletter1}>Newsletter</a>
            </div>
            <div
              className={styles.toggleMode}
              onClick={onToggleModeContainerClick}
            >
              <img
                className={styles.iconoutlinesun}
                loading="lazy"
                alt=""
                src="/iconoutlinesun1.svg"
              />
              <div className={styles.iconoutlinemoon}>
                <img className={styles.iconoutlinesun} loading="lazy" alt="" />
              </div>
            </div>
          </div>
        </header>
        <div className={styles.container}>
          <b className={styles.theBlog}>THE BLOG</b>
        </div>
      </section>
      <div className={styles.headerSection}>
        <div className={styles.container1}>
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
                    <span className={styles.privacyPolicy}>privacy policy</span>
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
      <Section />
      <FrameComponent1 />
      <section className={styles.lightModeInner}>
        <FrameComponent />
      </section>
      <section className={styles.footer}>
        <div className={styles.container2}>
          <div className={styles.div}>© 2023</div>
          <div className={styles.menu1}>
            <h3 className={styles.twitter}>{`Twitter `}</h3>
            <h3 className={styles.linkedin}>LinkedIn</h3>
            <h3 className={styles.email}>Email</h3>
            <h3 className={styles.rssFeed}>RSS feed</h3>
            <h3 className={styles.addToFeedly}>Add to Feedly</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LightMode;
