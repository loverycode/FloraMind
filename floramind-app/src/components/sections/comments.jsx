import React, {useState} from 'react'
import './comments.css'
import Container from '../ui/container';

const Comments = () =>{
     const slides = [{id:1, img:'/images/fourth_screen/com1.png'},
            {id:2, img:'/images/fourth_screen/com2.png'},
            {id:3, img:'/images/fourth_screen/com3.png'}
        ]
    const [currentIndex, setCurrentIndex]=UseState(0);
    const nextSlide=()=>{
        setCurrentIndex((prev)=>(prev+1)%slides.length)
    }
    const prevSlide=()=>{
        setCurrentIndex((prev)=>(prev-1+slides.length)%slides.length)
    }
    return(
        <section className="comments">
            <img src="/images/fourth_screen/leaves_lb.png" alt="" className="com-leaves-lb" />
            <img src="/images/fourth_screen/leaves_rb.png" alt="" className="com-leaves-rb" />
            <Container>
                <div className="line-animation">
                    <h3 className="live-animation-text">

                    </h3>
                </div>
                <div className="com-wrap">
                    <h3 className="comment-title">Отзывы</h3>
                    <div className="one-comment">
                        <button className="button_left">
                            <img src="/images/fourth_screen/button_left.png" alt="" className="button-left-img" />
                        </button>
                        <div className="carousel-slide" onClick={nextSlide}>
                            <img src={slides[currentIndex].image} alt={`отзыв ${currentIndex + 1}`} className="comment-image"/>
                        </div>
                        <button className="button_left"onClick={prevSlide}>
                            <img src="/images/fourth_screen/button_left.png" alt="" className="button-left-img" />
                        </button>
                    </div>

                </div>
            </Container>
        </section>
    );
};