"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var sum_1 = require("./sum");
(0, vitest_1.test)('adds 1 + 2 to equal 3', function () {
    (0, vitest_1.expect)((0, sum_1.sum)(1, 2)).toBe(3);
});
//# sourceMappingURL=sum.test.js.map