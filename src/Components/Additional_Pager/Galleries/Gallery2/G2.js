import React, { useEffect, useState } from 'react';
import './G2.css';

const G2 = ({data}) => {
    const [slideIndex, setSlideIndex] = useState(0);

    function plusSlides(n) {
        showSlides(slideIndex + n);
    }

    function currentSlide(n) {
        showSlides(n - 1);
    }

    function showSlides(newIndex) {
        setSlideIndex(newIndex);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            showSlides((slideIndex + 1) % data.length);
        }, 3500);

        return () => clearInterval(intervalId);
    }, [slideIndex, data]);

    return (
        <div className={"G2"}>
            <div className="slideshow-container">
                {data.map((item, index) => (
                    <div key={index} className={`mySlides fade ${index === slideIndex ? 'show' : 'hide'}`}>
                        <div className="numbertext">{`${index + 1} / ${data.length}`}</div>
                        <img className={"picct"} src={item.image} alt={item.caption} style={{ width: '100%' }} />
                    </div>
                ))}

                <a className="prev" onClick={() => plusSlides(-1)}>
                    &#10094;
                </a>
                <a className="next" onClick={() => plusSlides(1)}>
                    &#10095;
                </a>
            </div>
            <br />

            <div style={{ textAlign: 'center' }}>
                {data.map((_, index) => (
                    <span key={index} className={`dot ${index === slideIndex ? 'active' : ''}`} onClick={() => currentSlide(index + 1)}></span>
                ))}
            </div>
            <br />
        </div>
    );
};

export default G2;
