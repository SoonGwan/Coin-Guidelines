(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/api/index.ts":
/*!***********************************!*\
  !*** ./apps/api/src/api/index.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _v1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v1 */ "./apps/api/src/api/v1/index.ts");


const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
router.use("/v1", _v1__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),

/***/ "./apps/api/src/api/v1/cryptoInfo/cryptoInfo.ts":
/*!******************************************************!*\
  !*** ./apps/api/src/api/v1/cryptoInfo/cryptoInfo.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coin_line_api_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coin-line/api-util */ "./libs/api-util/src/index.ts");
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/config.json */ "./apps/api/src/config/config.json");
var _config_config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../config/config.json */ "./apps/api/src/config/config.json", 1);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = ((req, res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const CRYPTO_ID = Number(req.query.id);
    try {
        const { data } = yield axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${_config_config_json__WEBPACK_IMPORTED_MODULE_2__["COINMACAP"]}/cryptocurrency/quotes/latest?id=${CRYPTO_ID}`, {
            headers: {
                "X-CMC_PRO_API_KEY": `${_config_config_json__WEBPACK_IMPORTED_MODULE_2__["XCMCPROAPIKEY"]}`,
            },
        });
        _coin_line_api_util__WEBPACK_IMPORTED_MODULE_1__["logger"].green(`Success -> CRYPTO_ID : ${CRYPTO_ID} `);
        res.status(200).json({
            message: "success",
            data,
        });
    }
    catch (err) {
        _coin_line_api_util__WEBPACK_IMPORTED_MODULE_1__["logger"].red(err);
        return err;
    }
}));


/***/ }),

/***/ "./apps/api/src/api/v1/cryptoInfo/index.ts":
/*!*************************************************!*\
  !*** ./apps/api/src/api/v1/cryptoInfo/index.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cryptoInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cryptoInfo */ "./apps/api/src/api/v1/cryptoInfo/cryptoInfo.ts");


const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
router.get("/coinInfo", _cryptoInfo__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),

/***/ "./apps/api/src/api/v1/cryptoMap/Coin.ts":
/*!***********************************************!*\
  !*** ./apps/api/src/api/v1/cryptoMap/Coin.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _entitiy_currentCryptocurrency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../entitiy/currentCryptocurrency */ "./apps/api/src/entitiy/currentCryptocurrency/index.ts");
/* harmony import */ var _coin_line_api_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coin-line/api-util */ "./libs/api-util/src/index.ts");




/* harmony default export */ __webpack_exports__["default"] = ((req, res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    try {
        const coinRepo = Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["getRepository"])(_entitiy_currentCryptocurrency__WEBPACK_IMPORTED_MODULE_2__["CryptoCurrency"]);
        const coinData = yield coinRepo.find();
        _coin_line_api_util__WEBPACK_IMPORTED_MODULE_3__["logger"].yellow("CoinAPI");
        res.status(200).json({
            status: 200,
            message: "CoinData",
            data: { coinData },
        });
    }
    catch (err) {
        return err;
    }
}));


/***/ }),

/***/ "./apps/api/src/api/v1/cryptoMap/index.ts":
/*!************************************************!*\
  !*** ./apps/api/src/api/v1/cryptoMap/index.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Coin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Coin */ "./apps/api/src/api/v1/cryptoMap/Coin.ts");


const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
router.get("/coin", _Coin__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),

/***/ "./apps/api/src/api/v1/index.ts":
/*!**************************************!*\
  !*** ./apps/api/src/api/v1/index.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cryptoMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cryptoMap */ "./apps/api/src/api/v1/cryptoMap/index.ts");
/* harmony import */ var _cryptoInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cryptoInfo */ "./apps/api/src/api/v1/cryptoInfo/index.ts");



const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
router.use("/coin", _cryptoMap__WEBPACK_IMPORTED_MODULE_1__["default"], _cryptoInfo__WEBPACK_IMPORTED_MODULE_2__["default"]);
// router.use("/coin", coinInfo);
/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),

/***/ "./apps/api/src/config/config.json":
/*!*****************************************!*\
  !*** ./apps/api/src/config/config.json ***!
  \*****************************************/
/*! exports provided: SERVER, COINMACAP, XCMCPROAPIKEY, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"SERVER\":\"http://localhost:3333/api/v1\",\"COINMACAP\":\"https://pro-api.coinmarketcap.com/v1\",\"XCMCPROAPIKEY\":\"3a16711e-21a0-424a-a4c6-5f3d8e96cdd2\"}");

/***/ }),

/***/ "./apps/api/src/database.ts":
/*!**********************************!*\
  !*** ./apps/api/src/database.ts ***!
  \**********************************/
/*! exports provided: getConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConnection", function() { return getConnection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _coin_line_api_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coin-line/api-util */ "./libs/api-util/src/index.ts");
/* harmony import */ var _entitiy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entitiy */ "./apps/api/src/entitiy/index.ts");




const getConnection = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const connectionOptions = {
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "1234",
        database: "Coin",
        synchronize: false,
        logging: false,
        entities: _entitiy__WEBPACK_IMPORTED_MODULE_3__["default"],
        migrations: ["src/migration/**/*.ts"],
        subscribers: ["src/subscriber/**/*.ts"],
        cli: {
            entitiesDir: "src/entity",
            migrationsDir: "src/migration",
            subscribersDir: "src/subscriber",
        },
    };
    try {
        const connection = Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["createConnection"])(connectionOptions);
        _coin_line_api_util__WEBPACK_IMPORTED_MODULE_2__["logger"].green("[SERVER / DB] connected");
        return connection;
    }
    catch (err) {
        _coin_line_api_util__WEBPACK_IMPORTED_MODULE_2__["logger"].red("[SERVER / DB] Connection Error", err.message);
    }
});


/***/ }),

/***/ "./apps/api/src/entitiy/currentCryptocurrency/currentCryptocurrency.ts":
/*!*****************************************************************************!*\
  !*** ./apps/api/src/entitiy/currentCryptocurrency/currentCryptocurrency.ts ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);


let CryptoCurrency = class CryptoCurrency extends typeorm__WEBPACK_IMPORTED_MODULE_1__["BaseEntity"] {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryGeneratedColumn"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], CryptoCurrency.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryColumn"])({
        length: 255,
        nullable: false,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CryptoCurrency.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({
        length: 255,
        nullable: false,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CryptoCurrency.prototype, "symbol", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({
        length: 255,
        nullable: false,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CryptoCurrency.prototype, "slug", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({
        nullable: false,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], CryptoCurrency.prototype, "rank", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({
        nullable: false,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], CryptoCurrency.prototype, "is_active", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({
        length: 255,
        nullable: false,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CryptoCurrency.prototype, "first_historical_data", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({
        length: 255,
        nullable: false,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CryptoCurrency.prototype, "last_historical_data", void 0);
CryptoCurrency = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])("cryptoCurrency")
], CryptoCurrency);
/* harmony default export */ __webpack_exports__["default"] = (CryptoCurrency);


/***/ }),

/***/ "./apps/api/src/entitiy/currentCryptocurrency/index.ts":
/*!*************************************************************!*\
  !*** ./apps/api/src/entitiy/currentCryptocurrency/index.ts ***!
  \*************************************************************/
/*! exports provided: CryptoCurrency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _currentCryptocurrency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentCryptocurrency */ "./apps/api/src/entitiy/currentCryptocurrency/currentCryptocurrency.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CryptoCurrency", function() { return _currentCryptocurrency__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./apps/api/src/entitiy/index.ts":
/*!***************************************!*\
  !*** ./apps/api/src/entitiy/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _currentCryptocurrency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentCryptocurrency */ "./apps/api/src/entitiy/currentCryptocurrency/index.ts");

const entitise = [_currentCryptocurrency__WEBPACK_IMPORTED_MODULE_0__["CryptoCurrency"]];
/* harmony default export */ __webpack_exports__["default"] = (entitise);


/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database */ "./apps/api/src/database.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./apps/api/src/api/index.ts");




const app = express__WEBPACK_IMPORTED_MODULE_0__();
const greeting = { message: "Welcome to api!" };
_database__WEBPACK_IMPORTED_MODULE_2__["getConnection"]();
app.use(cors__WEBPACK_IMPORTED_MODULE_1__());
app.get("/api", (req, res) => {
    res.send(greeting);
});
app.use("/api", _api__WEBPACK_IMPORTED_MODULE_3__["default"]);
const port = process.env.port || 3333;
const server = app.listen(port, () => {
    console.log("Listening at http://localhost:" + port + "/api");
});
server.on("error", console.error);


/***/ }),

/***/ "./libs/api-util/src/index.ts":
/*!************************************!*\
  !*** ./libs/api-util/src/index.ts ***!
  \************************************/
/*! exports provided: logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/logger */ "./libs/api-util/src/lib/logger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return _lib_logger__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./libs/api-util/src/lib/logger.ts":
/*!*****************************************!*\
  !*** ./libs/api-util/src/lib/logger.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! colors */ "colors");
/* harmony import */ var colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(colors__WEBPACK_IMPORTED_MODULE_0__);

const red = (...str) => {
    str.forEach((e) => {
        console.log(colors__WEBPACK_IMPORTED_MODULE_0__["red"](e));
    });
};
const green = (...str) => {
    str.forEach((e) => {
        console.log(colors__WEBPACK_IMPORTED_MODULE_0__["green"](e));
    });
};
const yellow = (...str) => {
    str.forEach((e) => {
        console.log(colors__WEBPACK_IMPORTED_MODULE_0__["yellow"](e));
    });
};
const gray = (...str) => {
    str.forEach((e) => {
        console.log(colors__WEBPACK_IMPORTED_MODULE_0__["gray"](e));
    });
};
const grey = (...str) => {
    str.forEach((e) => {
        console.log(colors__WEBPACK_IMPORTED_MODULE_0__["grey"](e));
    });
};
/* harmony default export */ __webpack_exports__["default"] = ({
    red,
    green,
    yellow,
    grey,
    gray,
});


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gwonsungwan/Documents/GitHub/Coin-Guidelines/apps/api/src/main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "colors":
/*!*************************!*\
  !*** external "colors" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("colors");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map