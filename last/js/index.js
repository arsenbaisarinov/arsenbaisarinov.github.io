'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CitiesSlider = function (_React$Component) {
  _inherits(CitiesSlider, _React$Component);

  function CitiesSlider(props) {
    _classCallCheck(this, CitiesSlider);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.IMAGE_PARTS = 4;

    _this.changeTO = null;
    _this.AUTOCHANGE_TIME = 4000;

    _this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
    return _this;
  }

  CitiesSlider.prototype.componentWillUnmount = function componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  };

  CitiesSlider.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.runAutochangeTO();
    setTimeout(function () {
      _this2.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  };

  CitiesSlider.prototype.runAutochangeTO = function runAutochangeTO() {
    var _this3 = this;

    this.changeTO = setTimeout(function () {
      _this3.changeSlides(1);
      _this3.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  };

  CitiesSlider.prototype.changeSlides = function changeSlides(change) {
    window.clearTimeout(this.changeTO);
    var length = this.props.slides.length;

    var prevSlide = this.state.activeSlide;
    var activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide: activeSlide, prevSlide: prevSlide });
  };

  CitiesSlider.prototype.render = function render() {
    var _this4 = this;

    var _state = this.state;
    var activeSlide = _state.activeSlide;
    var prevSlide = _state.prevSlide;
    var sliderReady = _state.sliderReady;

    return React.createElement(
      'div',
      { className: classNames('slider', { 's--ready': sliderReady }) },
      React.createElement(
        'p',
        { className: 'slider__top-heading' },
        ''
      ),
      React.createElement(
        'div',
        { className: 'slider__slides' },
        this.props.slides.map(function (slide, index) {
          return React.createElement(
            'div',
            {
              className: classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index }),
              key: slide.city
            },
            React.createElement(
              'div',
              { className: 'slider__slide-content' },
              React.createElement(
                'h3',
                { className: 'slider__slide-subheading' },
                slide.country || slide.city
              ),
              React.createElement(
                'h2',
                { className: 'slider__slide-heading' },
                slide.city.split('A').map(function (l) {
                  return React.createElement(
                    'span',
                    null,
                    l
                  );
                })
              ),
              React.createElement(
                'p',
                { className: 'slider__slide-readmore' },
                'ОСТАВИТЬ ЗАЯВКУ'
              ),
              React.createElement(
                'div',
                {className: 'under-text'},
                React.createElement(
                'p',
                {className:'koncert'},
                'КОНЦЕРТ'
                ),
                React.createElement(
                'p',
                {className:'koncert'},
                'КИНО'
                ),
                React.createElement(
                'p',
                {className:'koncert'},
                'ТЕАТР'
                ),
                React.createElement(
                'p',
                {className:'koncert'},
                'ПАРК РАЗВЛЕЧЕНИЙ'
                ),
                React.createElement(
                'p',
                {className:'koncert'},
                'КУРОРТНЫЙ КОМПЛЕКС'
                ),
                React.createElement(
                'p',
                {className:'koncert'},
                'СТАДИОН'
                ),
                React.createElement(
                'p',
                {className:'koncert'},
                'РЕСТОРАН'
                ),
                React.createElement(
                'p',
                {className:'koncert'},
                'РАЗВЛЕКАТЕЛЬНОЕ ЗАВЕДЕНИЕ'
                ),
                React.createElement(
                'p',
                {className:'koncert'},
                'ЦИРК'
                )
                )
              
            ),
            React.createElement(
              'div',
              { className: 'slider__slide-parts' },
              [].concat(Array(_this4.IMAGE_PARTS).fill()).map(function (x, i) {
                return React.createElement(
                  'div',
                  { className: 'slider__slide-part', key: i },
                  React.createElement('div', { className: 'slider__slide-part-inner', style: { backgroundImage: 'url(' + slide.img + ')' } })
                );
              })
            )
          );
        })
      ),
     
    );
  };

  return CitiesSlider;
}(React.Component);

var slides = [{
  city: 'НА КОНЦЕРТ',
  country: 'БИЛЕТНАЯ СИСТЕМА',
  img: 'img/concert3.jpg'
}, {
  city: 'В КИНО',
  country: 'БИЛЕТНАЯ СИСТЕМА',
  img: 'img/cinema1.jpg'
}, {
  city: 'В ТЕАТР',
  country: 'БИЛЕТНАЯ СИСТЕМА',
  img: 'img/theatre1.jpg'
}, {
  city: 'В ПАРК РАЗВЛЕЧЕНИЙ',
  country: 'БИЛЕТНАЯ СИСТЕМА',
  img: 'img/park2.jpg'
}, {
  city: 'НА КУРОРТНЫЙ КОМПЛЕКС',
  country: 'БИЛЕТНАЯ СИСТЕМА',
  img: 'img/kurort1.jpg'
}, {
  city: 'НА СТАДИОН',
  country: 'БИЛЕТНАЯ СИСТЕМА',
  img: 'img/stad1.jpg'
}, {
  city: 'В РЕСТОРАН',
  country: 'БИЛЕТНАЯ СИСТЕМА',
  img: 'img/rest2.jpg'
}, {
  city: 'В РАЗВЛЕКАТЕЛЬНОЕ ЗАВЕДЕНИЕ',
  country: 'БИЛЕТНАЯ СИСТЕМА',
  img: 'img/raz2.jpg'
}, {
  city: 'В ЦИРК',
  country: 'БИЛЕТНАЯ СИСТЕМА',
  img: 'img/circus1.jpg'
}];

ReactDOM.render(React.createElement(CitiesSlider, { slides: slides }), document.querySelector('#app'));