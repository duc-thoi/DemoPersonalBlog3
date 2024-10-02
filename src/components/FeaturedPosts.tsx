import { FunctionComponent } from "react";
import FeaturedPostCards from "./FeaturedPostCards";
import styles from "./FeaturedPosts.module.css";

export type FeaturedPostsType = {
  className?: string;
};

const FeaturedPosts: FunctionComponent<FeaturedPostsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.featuredPosts, className].join(" ")}>
      <div className={styles.featuredPostCards}>
        <div className={styles.author}>Sunday , 1 Jan 2023</div>
      </div>
      <div className={styles.featuredPostCards1}>
        <h1 className={styles.heading}>
          Grid system for better Design User Interface
        </h1>
      </div>
      <div className={styles.featuredImage}>
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="/image-12@2x.png"
        />
      </div>
      <div className={styles.imageCaption}>
        <div className={styles.supportingText}>
          A grid system is a design tool used to arrange content on a webpage.
          It is a series of vertical and horizontal lines that create a matrix
          of intersecting points, which can be used to align and organize page
          elements. Grid systems are used to create a consistent look and feel
          across a website, and can help to make the layout more visually
          appealing and easier to navigate.
        </div>
        <div className={styles.supportingText}>
          If you’ve been to New York City and have walked the streets, it is
          easy to figure out how to get from one place to another because of the
          grid system that the city is built on. Just as the predictability of a
          city grid helps locals and tourists get around easily, so do webpage
          grids provide a structure that guides users and designers alike.
          Because of their consistent reference point, grids improve page
          readability and scannability and allow people to quickly get where
          they need to go.
        </div>
      </div>
      <div className={styles.postDetails}>
        <div className={styles.detailExcerpts}>
          <b className={styles.supportingText2}>
            Definition: A grid is made up of columns, gutters, and margins that
            provide a structure for the layout of elements on a page.
          </b>
        </div>
        <img
          className={styles.imageIcon1}
          loading="lazy"
          alt=""
          src="/image-13@2x.png"
        />
        <div className={styles.detailExcerpts}>
          <div className={styles.supportingText2}>
            Definition: A grid is made up of columns, gutters, and margins that
            provide a structure for the layout of elements on a page.
          </div>
        </div>
        <div className={styles.supportingText}>
          There are three common grid types used in websites and interfaces:
          column grid, modular grid, and hierarchical grid.
        </div>
        <div className={styles.supportingText}>
          Column grid involves dividing a page into vertical columns. UI
          elements and content are then aligned to these columns.
        </div>
        <div className={styles.supportingText}>
          Modular grid extends the column grid further by adding rows to it.
          This intersection of columns and rows make up modules to which
          elements and content are aligned. Modular grids are great for
          ecommerce and listing pages, as rows are repeatable to accommodate
          browsing.
        </div>
        <div className={styles.supportingText}>
          Hierarchical grid: Content is organized by importance using columns,
          rows, and modules. The most important elements and pieces of content
          take up the biggest pieces of the grid.
        </div>
        <b className={styles.supportingText8}>Breaking Down the Grid</b>
        <div className={styles.supportingText}>
          Regardless of the type of grid you are using, the grid is made up of
          three elements: columns, gutters, and margins.
        </div>
        <div className={styles.supportingText}>
          <b>Columns:</b>
          <span className={styles.span}>{` `}</span>
          <span>
            Columns take up most of the real estate in a grid. Elements and
            content are placed in columns. To adapt to any screen size, column
            widths are generally defined with percentages rather than fixed
            values and the number of columns will vary. For example, a grid on a
            mobile device might have 4 columns and a grid on a desktop might
            have 12 columns.
          </span>
        </div>
      </div>
      <div className={styles.postDetails}>
        <div className={styles.supportingText}>
          <b>Gutters:</b>
          <span>
            {" "}
            The gutter is the space between columns that separates elements and
            content from different columns. Gutter widths are fixed values but
            can change based on different breakpoints. For example, wider
            gutters are appropriate for larger screens, whereas smaller gutters
            are appropriate for smaller screens like mobile.
          </span>
        </div>
        <img
          className={styles.imageIcon2}
          loading="lazy"
          alt=""
          src="/image-14@2x.png"
        />
        <div className={styles.cardExcerpts}>
          <div className={styles.supportingText12}>
            Three elements make up any grid: (1) columns, (2) gutters, and (3)
            margins.
          </div>
        </div>
        <b className={styles.supportingText8}>Examples of Grids in Use</b>
        <b className={styles.supportingText14}>Example 1: Hierarchical Grid</b>
      </div>
      <FeaturedPostCards
        theNewYorkTimesHref="https://www.nytimes.com/"
        theNewYorkTimes="The New York Times"
        image="/image-15@2x.png"
        supportingText="The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
        supportingText1="Example 2: Column Grid"
      />
      <FeaturedPostCards
        theNewYorkTimesHref="https://ritual.com/"
        theNewYorkTimes="Ritual.com"
        image="/image-16@2x.png"
        supportingText="Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
        supportingText1="Example 3: Modular Grid"
      />
      <FeaturedPostCards
        theNewYorkTimesHref="https://www.behance.net/"
        theNewYorkTimes="Behance"
        image="/image-17@2x.png"
        supportingText="Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
        supportingText1="Example 4: Breaking the Grid"
      />
      <FeaturedPostCards
        theNewYorkTimesHref="https://material.io/design/material-studies/shrine.html#product-architecture"
        theNewYorkTimes="Shrine from Google’s Material Studies"
        image="/image-18@2x.png"
        supportingText="Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)"
        supportingText1="Benefits of the Grid"
      />
      <div className={styles.postDetails}>
        <div className={styles.supportingText}>
          <p className={styles.usingAGrid}>
            Using a grid benefits both end users and the designers alike:
          </p>
          <ul className={styles.designersCanQuicklyPutToge}>
            <li className={styles.usersCanEasilyScanPredicta}>
              Designers can quickly put together well-aligned interfaces.
            </li>
            <li className={styles.usersCanEasilyScanPredicta}>
              Users can easily scan predictable grid-based interfaces.
            </li>
            <li>
              {`A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of `}
              <a
                className={styles.responsiveWebDesign}
                href="https://www.nngroup.com/articles/responsive-web-design-definition/"
                target="_blank"
              >
                <span className={styles.privacyPolicy}>
                  responsive web design
                </span>
              </a>
              . Responsive design uses breakpoints to determine the screen size
              threshold at which the layout should change. For example, a
              desktop screen may have 12 grid columns, which may be stacked on
              mobile so that the resulting layout has only 4 columns.
            </li>
          </ul>
        </div>
        <img
          className={styles.imageIcon2}
          loading="lazy"
          alt=""
          src="/image-19@2x.png"
        />
        <div className={styles.detailExcerpts}>
          <div className={styles.supportingText2}>
            At the mobile size, Behance’s one-column grid (left) was reflowed
            into a four-column grid structure (right).
          </div>
        </div>
        <div className={styles.supportingText}>
          Even more importantly, the grid is not a throw-away concept. It is
          used by both designers and developers alike. Be sure to communicate
          with your developers the grid structure used when creating the design,
          so they can implement it accordingly.
        </div>
        <b className={styles.supportingText8}>
          Choosing and Setting Up Your Grid
        </b>
      </div>
      <div className={styles.postDetails}>
        <div className={styles.supportingText}>
          How you use and set up a grid is fundamental to creating well thought
          out layouts and experiences for your user.
        </div>
        <div className={styles.supportingText}>
          <b>{`Choose the right grid for your needs. `}</b>
          <span>
            Take time to think through what type of grid ­— column, modular, or
            hierarchical — best suits your needs. A hierarchical grid may be the
            best fit if one item on your page will always be more important than
            the surrounding elements. For example, hierarchical grids are great
            for online news platforms. If the content you need to display is
            highly variable, consider using a basic column or modular grid, as
            these provide lots of flexibility when designing. For example,
            elements and content can span across multiple columns or modules or
            just one to fit design needs.
          </span>
        </div>
        <div className={styles.supportingText}>
          <b>Spend time setting up your grid.</b>
          <span>
            {" "}
            Once you have figured out what type of grid will work well for your
            needs, start setting it up. Determine the number of columns and the
            margin and gutter sizes relative to your screen sizes. You will most
            likely want to prepare for mobile, tablet, and desktop screens. A
            12-column grid at laptop or desktop size is generally flexible
            enough for most design needs. The number of columns will decrease as
            your device size decreases. Wireframing tools like Sketch and Figma
            have quick and easy ways to set up and edit your grid, even after
            you have started designing.
          </span>
        </div>
        <img
          className={styles.imageIcon2}
          loading="lazy"
          alt=""
          src="/image-20@2x.png"
        />
        <div className={styles.metadataItems}>
          <div className={styles.supportingText22}>
            Easily set the number of columns, the gutter size, and margin size
            in Figma.
          </div>
        </div>
        <div className={styles.supportingText}>
          <b>Always place content within columns, not gutters.</b>
          <span>
            {" "}
            The gutters should remain empty as you place elements on the grid in
            order to clearly separate and align content and elements.
          </span>
        </div>
        <img
          className={styles.imageIcon2}
          loading="lazy"
          alt=""
          src="/image-21@2x.png"
        />
        <div className={styles.detailExcerpts}>
          <div className={styles.supportingText2}>
            Content or elements should be placed within and across columns, not
            gutters.
          </div>
        </div>
        <div className={styles.supportingText}>
          <b>Consider using an 8px grid system.</b>
          <span>
            {" "}
            For most common devices, the screen size in pixels is a multiple of
            8. Keeping grid-component values at a multiple of 8 will generally
            make it easier to scale and implement a grid.
          </span>
        </div>
        <b className={styles.supportingText8}>Conclusion</b>
      </div>
      <div className={styles.featuredPostCards4}>
        <div className={styles.supportingText2}>
          Grids not only provide designers a structure on which to base layouts,
          but they also improve readability and scannability for end users. Use
          a good grid system that easily adapts to various screen sizes.
        </div>
      </div>
      <div className={styles.postTags}>
        <div className={styles.categories}>
          <div className={styles.badge}>
            <div className={styles.badgeBase}>
              <div className={styles.badgeLabel}>Design</div>
            </div>
          </div>
          <div className={styles.badge1}>
            <div className={styles.badgeBase1}>
              <div className={styles.text}>Interface</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.headingAndSupportingText}>
          <div className={styles.imageCaption}>
            <div className={styles.subheading}>Newlatters</div>
            <h1 className={styles.heading1}>Stories and interviews</h1>
          </div>
          <h3 className={styles.supportingText28}>
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </h3>
        </div>
        <div className={styles.emailCapture}>
          <div className={styles.inputField}>
            <div className={styles.inputFieldBase}>
              <div className={styles.inputWithLabel}>
                <div className={styles.label}>Email</div>
                <div className={styles.input}>
                  <input
                    className={styles.content1}
                    placeholder="Enter your email"
                    type="text"
                  />
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
          <button className={styles.button}>
            <div className={styles.buttonBase}>
              <div className={styles.buttonLabel}>Subscribe</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
