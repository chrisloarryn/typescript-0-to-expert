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
    function MultimediaFile(createdAt, modifiedAt, name, elementType) {
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.name = name;
        this.elementType = elementType;
    }
    MultimediaFile.prototype.uploadInfo = function () {
        var information = this.name + " " + this.elementType + " " + this.modifiedAt + " " + this.createdAt;
        console.log(information);
    };
    return MultimediaFile;
}());
var DynamicFile = /** @class */ (function (_super) {
    __extends(DynamicFile, _super);
    // duration: string = ''
    function DynamicFile(createdAt, modifiedAt, name, elementType, duration) {
        var _this = _super.call(this, createdAt, modifiedAt, name, elementType) || this;
        _this.createdAt = createdAt;
        _this.modifiedAt = modifiedAt;
        _this.name = name;
        _this.elementType = elementType;
        _this.duration = duration;
        return _this;
    }
    DynamicFile.prototype.stop = function () {
        console.log('stopping!');
    };
    DynamicFile.prototype.pause = function () {
        console.log('pausing!');
    };
    DynamicFile.prototype.play = function () {
        console.log('playing!');
    };
    return DynamicFile;
}(MultimediaFile));
var StaticFile = /** @class */ (function (_super) {
    __extends(StaticFile, _super);
    function StaticFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StaticFile.prototype.edit = function () {
        console.log('Editing!');
    };
    return StaticFile;
}(MultimediaFile));
var mFile = new MultimediaFile('13/09/1995', '13/09/2020', 'test.txt', 'text file');
mFile.uploadInfo();
var dFile = new DynamicFile('13/09/1995', '13/09/2020', 'test.txt', 'text file', '05:00');
dFile.stop();
var sFile = new StaticFile('13/09/1995', '13/09/2020', 'test.txt', 'text file');
var mFile2 = dFile;
var sFile2 = dFile;
var dFile2 = mFile;
