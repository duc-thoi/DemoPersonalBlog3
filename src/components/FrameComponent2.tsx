import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={[styles.sectionWrapper, className].join(" ")}>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.blogPostCard}>
              <img
                className={styles.imageIcon}
                loading="lazy"
                alt=""
                src="/image-3@2x.png"
                onClick={onImageClick}
              />
              <div className={styles.content1}>
                <div className={styles.headingAndText}>
                  <div className={styles.author}>Sunday , 1 Jan 2023</div>
                  <div className={styles.headingAndIcon} onClick={onImageClick}>
                    <h2 className={styles.heading}>
                      Grid system for better Design User Interface
                    </h2>
                    <input className={styles.iconWrap} type="checkbox" />
                  </div>
                  <div className={styles.supportingText}>
                    A grid system is a design tool used to arrange content on a
                    webpage. It is a series of vertical and horizontal lines
                    that create a matrix of intersecting points, which can be
                    used to align and organize page elements. Grid systems are
                    used to create a consistent look and feel across a website,
                    and can help to make the layout more visually appealing and
                    easier to navigate.
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
                      <div className={styles.text1}>Interface</div>
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

export default FrameComponent2;
