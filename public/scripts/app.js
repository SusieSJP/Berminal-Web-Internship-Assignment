'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SnowplusApp = function (_React$Component) {
  _inherits(SnowplusApp, _React$Component);

  function SnowplusApp() {
    _classCallCheck(this, SnowplusApp);

    return _possibleConstructorReturn(this, (SnowplusApp.__proto__ || Object.getPrototypeOf(SnowplusApp)).apply(this, arguments));
  }

  _createClass(SnowplusApp, [{
    key: 'render',

    // constructor() {
    //   super();
    // }

    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          'this is the snowplus app running!'
        )
      );
    }
  }]);

  return SnowplusApp;
}(_react2.default.Component);

// class Home extends React.component {
//   render() {

//   }
// }

// class SubmitPage extends React.component {
//   render() {

//   }
// }

// class ConfirmPage extends React.component {
//   render() {

//   }
// }


var appRoot = document.getElementById('app');
_reactDom2.default.render(_react2.default.createElement(SnowplusApp, null), appRoot);
