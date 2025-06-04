"use strict";
var LoggingLevel;
(function (LoggingLevel) {
    LoggingLevel["Info"] = "Info";
    LoggingLevel["Error"] = "Error";
    LoggingLevel["Warning"] = "Warning";
    LoggingLevel["Debug"] = "Debug";
})(LoggingLevel || (LoggingLevel = {}));
var LoggingFormat;
(function (LoggingFormat) {
    LoggingFormat["Standard"] = "[%level][%date] %text";
    LoggingFormat["Minimal"] = "*%level* %text";
})(LoggingFormat || (LoggingFormat = {}));
class Logger {
    cachedLogs;
    format;
    constructor(format) {
        this.cachedLogs = new Map();
        this.format = format;
    }
    log(logLevel, message) {
        if (!this.cachedLogs.has(logLevel)) {
            this.cachedLogs.set(logLevel, []);
        }
        this.cachedLogs.get(logLevel).push(message);
    }
    getFormat() {
        return this.format;
    }
}
//# sourceMappingURL=CachingLogger.js.map