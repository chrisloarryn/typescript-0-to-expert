"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MultimediaFile = /** @class */ (function () {
    function MultimediaFile() {
        this.checkSum = '';
    }
    Object.defineProperty(MultimediaFile.prototype, "isValid", {
        get: function () {
            if (this.checkSum.length > 10)
                return true;
            else
                return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultimediaFile.prototype, "newCheckSum", {
        set: function (value) {
            this.checkSum = value;
        },
        enumerable: false,
        configurable: true
    });
    MultimediaFile.prototype.validateCheckSum = function () {
        return true;
    };
    MultimediaFile.prototype.GetType = function () {
        return 'multimedia';
    };
    return MultimediaFile;
}());
var DynamicFile = /** @class */ (function (_super) {
    __extends(DynamicFile, _super);
    function DynamicFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DynamicFile.prototype.GetType = function () {
        if (this.checkSum === '') {
            this.validateCheckSum();
        }
        return 'dynamic';
    };
    return DynamicFile;
}(MultimediaFile));
var StaticFile = /** @class */ (function (_super) {
    __extends(StaticFile, _super);
    function StaticFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StaticFile.prototype.GetType = function () {
        return 'static';
    };
    return StaticFile;
}(MultimediaFile));
var OtherFile = /** @class */ (function (_super) {
    __extends(OtherFile, _super);
    function OtherFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OtherFile;
}(MultimediaFile));
var multimedia = new MultimediaFile();
var dFile = new DynamicFile();
var sFile = new StaticFile();
var oFile = new OtherFile();
multimedia = dFile;
console.log(multimedia.GetType());
multimedia = sFile;
console.log(multimedia.GetType());
multimedia = oFile;
console.log(multimedia.GetType());
console.log('multimedia isValid', multimedia.isValid);
multimedia.newCheckSum = '8942136879012';
console.log('multimedia isValid', multimedia.isValid);
