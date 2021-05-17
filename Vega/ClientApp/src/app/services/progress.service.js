"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserXhrWithProgress = exports.ProgressService = void 0;
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/internal/Subject");
var ProgressService = /** @class */ (function () {
    function ProgressService() {
        this.uploadProgress = new Subject_1.Subject();
        this.downloadProgress = new Subject_1.Subject();
    }
    ProgressService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProgressService);
    return ProgressService;
}());
exports.ProgressService = ProgressService;
var BrowserXhrWithProgress = /** @class */ (function () {
    function BrowserXhrWithProgress(progressService) {
        this.progressService = progressService;
    }
    BrowserXhrWithProgress.prototype.build = function () {
        var _this = this;
        var xhr = new XMLHttpRequest();
        xhr.onprogress = function (event) {
            _this.progressService.downloadProgress.next(_this.createProgress(event));
        };
        xhr.upload.onprogress = function (event) {
            _this.progressService.uploadProgress.next(_this.createProgress(event));
        };
        return xhr;
    };
    BrowserXhrWithProgress.prototype.createProgress = function (event) {
        return {
            total: event.total,
            percentage: Math.round(event.loaded / event.total * 100)
        };
    };
    BrowserXhrWithProgress = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ProgressService])
    ], BrowserXhrWithProgress);
    return BrowserXhrWithProgress;
}());
exports.BrowserXhrWithProgress = BrowserXhrWithProgress;
//# sourceMappingURL=progress.service.js.map