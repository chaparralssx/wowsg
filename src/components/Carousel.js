import {Carousel as BCarousel} from 'react-bootstrap/lib'
import React from 'react';

class Carousel extends React.Component {
    render() {
        return (
            <BCarousel className="Carousel">
                <BCarousel.Item>
                    <img alt="Rosemary" src="/static/images/slider-rosemary.jpg"/>
                    <BCarousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </BCarousel.Caption>
                </BCarousel.Item>
                <BCarousel.Item>
                    <img alt="Rosemary 2" src="/static/images/slider-rosemary.jpg"/>
                    <BCarousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </BCarousel.Caption>
                </BCarousel.Item>
                <BCarousel.Item>
                    <img alt="Jeremy" src="/static/images/slider-Jeremy.jpg"/>
                    <BCarousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </BCarousel.Caption>
                </BCarousel.Item>
            </BCarousel>
        )
    }
}

export default Carousel;