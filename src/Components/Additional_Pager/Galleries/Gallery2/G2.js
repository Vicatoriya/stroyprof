import React, { useEffect } from 'react';
import './G2.css';
import '../Gallery1/data';
const G2 = () => {
    let slideIndex = 0;

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");

        // Проверка, что slides не равен null или undefined
        if (slides && slides.length > 0) {
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            slides[slideIndex-1].style.display = "block";
            setTimeout(showSlides, 3500); // Change image every 3.5 seconds
        }
    }

    useEffect(() => {
        // Вызываем showSlides сразу после рендеринга компонента
        showSlides();
    }, []);

    return (
        <div>
            <div className="slideshow-container">
                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src={"img4gallery2/1.jpg"} alt={"alt"} style={{ width: '100%' }} />
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">2 / 3</div>
                    <img src={"img4gallery2/2.jpg"} alt={"alt"}style={{ width: '100%' }} />
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">3 / 3</div>
                    <img src={"img4gallery2/3.jpg"} alt={"alt"} style={{ width: '100%' }} />
                </div>

                <a className="prev" onClick={() => plusSlides(-1)}>
                    &#10094;
                </a>
                <a className="next" onClick={() => plusSlides(1)}>
                    &#10095;
                </a>
            </div>
            <br />

            <div style={{ textAlign: 'center' }}>
                <span className="dot" onClick={() => currentSlide(1)}></span>
                <span className="dot" onClick={() => currentSlide(2)}></span>
                <span className="dot" onClick={() => currentSlide(3)}></span>
            </div>
            <br />
        </div>
    );
};

export default G2;
