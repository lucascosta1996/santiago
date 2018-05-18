import React from 'react';

const images = [
  {imageUrl: "images/1.jpg", title: "1", technique:"spray"},
  {imageUrl: "images/2.jpg", title: "2", technique:"spray"},
  {imageUrl: "images/3.jpg", title: "3", technique:"spray"},
  {imageUrl: "images/4.jpg", title: "4", technique:"spray"},
  {imageUrl: "images/5.jpg", title: "5", technique:"spray"}
];

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
