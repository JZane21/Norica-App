import { Component, ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface MultiSliderProps {
  children: ReactNode;
}

export default class MultiSlider extends Component<MultiSliderProps> {
  private slider: Slider | null = null;
  constructor(props: MultiSliderProps) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    if (this.slider) {
      this.slider.slickNext();
    }
  }

  previous() {
    if (this.slider) {
      this.slider.slickPrev();
    }
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      rows: 2,
      arrows: false,
      swipe: false,
    };
    return (
      <div>
        <div style={{ textAlign: "right", margin: 10, marginBottom: -40 }}>
          <button
            className="w-[50px] h-[40px] text-gray-400 hover:bg-red-600 
          active:bg-red-700 active:text-white hover:text-white text-base font-thin p-2 pl-3 pr-3 rounded-full m-2 "
            onClick={this.previous}
          >
            <svg
              className="w-3.5 h-3.5 ml-2 transform rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
          <button
            className="w-[50px] h-[40px] text-gray-400 hover:bg-red-600 
          active:bg-red-700 active:text-white hover:text-white text-base font-thin p-2 pl-3 pr-3 rounded-full"
            onClick={this.next}
          >
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
        <div className="p-8">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {this.props.children}
          </Slider>
        </div>
      </div>
    );
  }
}
