import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SlideShow.css';
import Navigation from "./Navigation";
import SideNavBar from "./SideNavBar";

const SlideShow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
      
        {
            title: "Attendance",
            link: "/CheckAttendance",
            buttonText: "Attendance"
        },
        {
            title: "Proffinder",
            link: "/TeacherDetailsForm",
            buttonText: "Proffinder"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div>
        <Navigation />
      <SideNavBar />
      
        <div className="slideshow-container">
            {slides.map((slide, index) => (
                <div key={index} className={`mySlides fade ${index === currentSlide ? 'active' : ''}`}>
                    <div className="slide-content">
                        <h2>{slide.title}</h2>
                        <Link to={slide.link}>
                            <button>{slide.buttonText}</button>
                        </Link>
                    </div>
                </div>
            ))}
            <a className="prev" onClick={prevSlide}>&#10094;</a>
            <a className="next" onClick={nextSlide}>&#10095;</a>
        </div>
        </div>
        
    );
};

export default SlideShow;
