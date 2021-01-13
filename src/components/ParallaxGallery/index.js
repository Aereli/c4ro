import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const ParallaxGallery = ({ data }) => (
  <div className={styles.parallaxGallery}>
    {data.map((item) => (
      <div key={item.id} className={styles.galleryItem} style={{ backgroundImage: `url(${item.image.childImageSharp.fluid.src})` }}>
        <div className={styles.info}>
          <p className={styles.description}>{item.dek}</p>
        </div>
      </div>
    ))}
  </div>
);

ParallaxGallery.propTypes = {
  data: PropTypes.node,
};

ParallaxGallery.defaultProps = {
  data: [],
};

export default ParallaxGallery;
