import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Column from "../components/Column";
import FeaturedPosts from "../components/FeaturedPosts";
import styles from "./BlogDetailBlog.module.css";

const BlogDetailBlog: FunctionComponent = () => {
  const navigate = useNavigate();

  const onYourNameTextClick = useCallback(() => {
    navigate("/dark-mode");
  }, [navigate]);

  const onIconoutlinemoonContainerClick = useCallback(() => {
    navigate("/light-mode");
  }, [navigate]);

  return (
    <div className={styles.blogDetailBlog}>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <a className={styles.yourName} onClick={onYourNameTextClick}>
            Your Name
          </a>
          <div className={styles.menu}>
            <div className={styles.blog} onClick={onYourNameTextClick}>
              <a className={styles.blog1}>Blog</a>
            </div>
            <div className={styles.projects}>
              <a className={styles.blog1}>Projects</a>
            </div>
            <div className={styles.projects}>
              <a className={styles.blog1}>About</a>
            </div>
            <div className={styles.projects}>
              <a className={styles.newsletter1}>Newsletter</a>
            </div>
            <div className={styles.toggleMode}>
              <img
                className={styles.iconoutlinesun}
                loading="lazy"
                alt=""
                src="/iconoutlinesun.svg"
              />
              <div
                className={styles.iconoutlinemoon}
                onClick={onIconoutlinemoonContainerClick}
              >
                <img
                  className={styles.moonIcon}
                  loading="lazy"
                  alt=""
                  src="/moon.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <b className={styles.theBlog}>THE BLOG</b>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.contentWrapper}>
          <Column />
          <FeaturedPosts />
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container1}>
          <a className={styles.a}>© 2023</a>
          <div className={styles.menu1}>
            <a className={styles.twitter}>{`Twitter `}</a>
            <a className={styles.linkedin}>LinkedIn</a>
            <h3 className={styles.email}>Email</h3>
            <a className={styles.rssFeed}>RSS feed</a>
            <h3 className={styles.addToFeedly}>Add to Feedly</h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogDetailBlog;
