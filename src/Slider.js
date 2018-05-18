import React from 'react';
import SlideOne from './Slides/SlideOne';
import SlideTwo from './Slides/SlideTwo';
import SlideThree from './Slides/SlideThree';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      SlideCount: 1
    }
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  render() {
  return (
    <div className="slider">
      { this.state.slideCount === 1 ? <SlideOne /> : null }
      { this.state.slideCount === 2 ? <SlideTwo /> : null }
      { this.state.slideCount === 3 ? <SlideThree /> : null }
    </div>
  );
}
}


const Slideshow = () => {
    return (
      <div>
        {this.props.slides.map((slide, index) => (
          <figure>
            <img src={images.imageUrl} />
          </figure>
        ))}
      </div>

    )
}
