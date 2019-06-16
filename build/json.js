"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var svgCaption = types_1.Resource.svgCaption;
var producer = [
    'https://vamtiger-project.github.io/vamtiger-organization-infers-group-json-ld/build/vamtiger-organization-infers-group-json-ld.js',
    'https://vamtiger-project.github.io/vamtiger-person-abraham-mamela-json-ld/build/vamtiger-person-abraham-mamela-json-ld.js'
];
var creator = producer.slice();
var funder = [
    'https://vamtiger-project.github.io/vamtiger-organization-welcome-json-ld/build/vamtiger-organization-welcome-json-ld.js'
];
exports.default = {
    svgCaption: svgCaption,
    jsonLd: [
        {
            index: 0,
            fields: {
                producer: producer,
                creator: creator,
                funder: funder
            }
        }
    ]
};
//# sourceMappingURL=json.js.map