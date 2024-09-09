import React from 'react';
import Slider from 'react-slick';
import styles from './CarouselBanner.module.css';

function BannerCarousel({ slides }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className={styles['banner-carousel']}>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className={styles['banner-slide']}>
                        <img src={slide.image} alt={`Slide ${index}`} />
                        <div className={styles['banner-content']}>
                            <h2 className={styles['banner-title']}>{slide.title}</h2>
                            <p className={styles['banner-paragraph']}>{slide.paragraph}</p>
                            <a href={slide.buttonLink} className={styles['banner-button']}>
                                {slide.buttonText}
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default BannerCarousel;