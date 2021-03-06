'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _time = require('../../utils/time');

var time = _interopRequireWildcard(_time);

var _services = require('../../services');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoScroll = function (_React$Component) {
	_inherits(AutoScroll, _React$Component);

	function AutoScroll() {
		_classCallCheck(this, AutoScroll);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AutoScroll).apply(this, arguments));
	}

	_createClass(AutoScroll, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var el = this.props.getRootElement();
			var width = el.getBoundingClientRect().width;
			var refresh = function refresh() {
				var elapsedTime = time.getElapsedTime(_this2.props.player, (0, _services.getWebAudioTime)());
				var size = time.timeToSize(elapsedTime, _this2.props.player, _this2.props.song);
				el.scrollLeft = size > width / 2 ? size - width / 2 : 0;

				_this2.nextRefresh = setTimeout(function () {
					return window.requestAnimationFrame(refresh);
				}, 20);
			};
			window.requestAnimationFrame(refresh);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.nextRefresh) {
				clearTimeout(this.nextRefresh);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);

	return AutoScroll;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		player: state.player,
		song: state.song
	};
})(AutoScroll);
module.exports = exports['default'];