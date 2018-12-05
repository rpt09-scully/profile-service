/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/* no static exports found */
/* all exports used */
/*!********************************!*\
  !*** ./components/profile.jsx ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 37);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// MODEL https://www.alltrails.com/members/rpeh\n\nvar App = function (_Component) {\n    _inherits(App, _Component);\n\n    function App() {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));\n\n        _this.state = {\n            id: 22,\n            first_name: 'Joel',\n            last_name: 'Vandervort',\n            full_name: 'Joel Vandervort',\n            email: 'tbecker@example.net',\n            location: 'Fletachester, VA',\n            date_joined: '1979-02-20',\n            favorite_activities: ['Hiking', 'Hunting', 'Fishing'],\n            bio: 'Aut sequi dolore temporibus quia qui consequatur. Possimus non fugiat perspiciatis voluptas. Enim aut quia minus ipsam. Dolore corrupti et tenetur sit.',\n            photo_url: 'http://lorempixel.com/100/100/',\n            pro: true\n            // Could still add Reputation and followers\n        };\n\n        _this.convertDate = _this.convertDate.bind(_this);\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: 'convertDate',\n        value: function convertDate() {\n            var monthNames = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n            var date = new Date(this.state.date_joined + 'Z');\n\n            return monthNames[date.getMonth() - 1] + ' ' + date.getFullYear().toString();\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { id: 'profile-container' },\n                _react2.default.createElement(\n                    'div',\n                    { id: 'profile-subbar' },\n                    _react2.default.createElement(\n                        'h3',\n                        null,\n                        'Profile'\n                    )\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { id: 'profile-main' },\n                    _react2.default.createElement(\n                        'div',\n                        { id: 'profile-info' },\n                        _react2.default.createElement(\n                            'div',\n                            { id: 'profile-left-content' },\n                            _react2.default.createElement(\n                                'div',\n                                { id: 'profile-image-container' },\n                                _react2.default.createElement('img', { id: 'profile-image', src: this.state.photo_url, alt: this.state.full_name })\n                            ),\n                            _react2.default.createElement(\n                                'strong',\n                                null,\n                                'Member Since'\n                            ),\n                            _react2.default.createElement(\n                                'span',\n                                null,\n                                this.convertDate()\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'div',\n                            { id: 'profile-right-content' },\n                            _react2.default.createElement(\n                                'h2',\n                                { id: 'profile-user-name' },\n                                this.state.full_name\n                            ),\n                            _react2.default.createElement(\n                                'h4',\n                                { id: 'profile-user-location' },\n                                this.state.location\n                            ),\n                            _react2.default.createElement(\n                                'p',\n                                { id: 'profile-user-bio' },\n                                this.state.bio\n                            ),\n                            _react2.default.createElement(\n                                'h4',\n                                { id: 'profile-favorite-activities-title' },\n                                'Favorite Activities'\n                            ),\n                            _react2.default.createElement('div', { id: 'profile-favorite-activities-tags' })\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return App;\n}(_react.Component);\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2xpZW50L2NvbXBvbmVudHMvcHJvZmlsZS5qc3g/OGYwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbi8vIE1PREVMIGh0dHBzOi8vd3d3LmFsbHRyYWlscy5jb20vbWVtYmVycy9ycGVoXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIGlkOiAyMixcbiAgICAgICAgZmlyc3RfbmFtZTogJ0pvZWwnLFxuICAgICAgICBsYXN0X25hbWU6ICdWYW5kZXJ2b3J0JyxcbiAgICAgICAgZnVsbF9uYW1lOiAnSm9lbCBWYW5kZXJ2b3J0JyxcbiAgICAgICAgZW1haWw6ICd0YmVja2VyQGV4YW1wbGUubmV0JyxcbiAgICAgICAgbG9jYXRpb246ICdGbGV0YWNoZXN0ZXIsIFZBJyxcbiAgICAgICAgZGF0ZV9qb2luZWQ6ICcxOTc5LTAyLTIwJyxcbiAgICAgICAgZmF2b3JpdGVfYWN0aXZpdGllczogWydIaWtpbmcnLCAnSHVudGluZycsICdGaXNoaW5nJ10sXG4gICAgICAgIGJpbzogJ0F1dCBzZXF1aSBkb2xvcmUgdGVtcG9yaWJ1cyBxdWlhIHF1aSBjb25zZXF1YXR1ci4gUG9zc2ltdXMgbm9uIGZ1Z2lhdCBwZXJzcGljaWF0aXMgdm9sdXB0YXMuIEVuaW0gYXV0IHF1aWEgbWludXMgaXBzYW0uIERvbG9yZSBjb3JydXB0aSBldCB0ZW5ldHVyIHNpdC4nLFxuICAgICAgICBwaG90b191cmw6ICdodHRwOi8vbG9yZW1waXhlbC5jb20vMTAwLzEwMC8nLFxuICAgICAgICBwcm86IHRydWVcbiAgICAgICAgLy8gQ291bGQgc3RpbGwgYWRkIFJlcHV0YXRpb24gYW5kIGZvbGxvd2Vyc1xuICAgIH07XG5cbiAgICB0aGlzLmNvbnZlcnREYXRlID0gdGhpcy5jb252ZXJ0RGF0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgICBjb252ZXJ0RGF0ZSgpIHtcbiAgICAgICAgY29uc3QgbW9udGhOYW1lcyA9IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsXG4gICAgICAgICAgICBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIixcbiAgICAgICAgICAgIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl07XG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUodGhpcy5zdGF0ZS5kYXRlX2pvaW5lZCArJ1onKTtcblxuICAgICAgICByZXR1cm4gbW9udGhOYW1lc1tkYXRlLmdldE1vbnRoKCkgLSAxXSArICcgJyArIGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cInByb2ZpbGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7LyogUG9zc2libHkgQWRkIG5hdmlnYXRpb24gdG9wYmFyIGZvciBvdGhlciBwcm9maWxlIGNvbXBvbmVudHMgKi99XG4gICAgICAgICAgICA8ZGl2IGlkPVwicHJvZmlsZS1zdWJiYXJcIj5cbiAgICAgICAgICAgICAgICA8aDM+UHJvZmlsZTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9maWxlLW1haW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvZmlsZS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9maWxlLWxlZnQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2ZpbGUtaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cInByb2ZpbGUtaW1hZ2VcIiBzcmM9e3RoaXMuc3RhdGUucGhvdG9fdXJsfSBhbHQ9e3RoaXMuc3RhdGUuZnVsbF9uYW1lfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TWVtYmVyIFNpbmNlPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5jb252ZXJ0RGF0ZSgpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uPkZvbGxvdzwvYnV0dG9uPiBGb2xsb3dlcnMgbm90IGltcGxlbWVudGVkIHlldCAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9maWxlLXJpZ2h0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBpZD1cInByb2ZpbGUtdXNlci1uYW1lXCI+e3RoaXMuc3RhdGUuZnVsbF9uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogU3RpbGwgTmVlZCBQcm8vTm90IFBybyAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBpZD1cInByb2ZpbGUtdXNlci1sb2NhdGlvblwiPnt0aGlzLnN0YXRlLmxvY2F0aW9ufTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInByb2ZpbGUtdXNlci1iaW9cIj57dGhpcy5zdGF0ZS5iaW99PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGlkPVwicHJvZmlsZS1mYXZvcml0ZS1hY3Rpdml0aWVzLXRpdGxlXCI+RmF2b3JpdGUgQWN0aXZpdGllczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvZmlsZS1mYXZvcml0ZS1hY3Rpdml0aWVzLXRhZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogQ29tcG9uZW50IGZvciBUYWdzIEhlcmUgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L2NvbXBvbmVudHMvcHJvZmlsZS5qc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQ0E7QUFjQTtBQWxCQTtBQW1CQTtBQUNBOzs7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVRBO0FBREE7QUFMQTtBQTZCQTs7OztBQTlEQTtBQUNBO0FBREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n");

/***/ }),

/***/ 19:
/* no static exports found */
/* all exports used */
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _profile = __webpack_require__(/*! ./components/profile.jsx */ 18);\n\nvar _profile2 = _interopRequireDefault(_profile);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.Profile = _profile2.default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2xpZW50L2NsaWVudC5qcz84NmY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9maWxlIGZyb20gJy4vY29tcG9uZW50cy9wcm9maWxlLmpzeCc7XG5cbndpbmRvdy5Qcm9maWxlID0gUHJvZmlsZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L2NsaWVudC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7OztBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///19\n");

/***/ }),

/***/ 37:
/* no static exports found */
/* all exports used */
/*!***************************!*\
  !*** ../~/react/react.js ***!
  \***************************/
/***/ (function(module, exports) {

"use strict";
eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/home/weber/Documents/profile-service/node_modules/react/react.js'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzcuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///37\n");

/***/ })

/******/ });