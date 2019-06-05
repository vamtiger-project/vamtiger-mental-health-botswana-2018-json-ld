export declare enum ScriptType {
    jsonLd = "application/ld+json",
    json = "application/json"
}
export interface IAnyObject {
    [key: string]: any;
}
export interface ILoadScript {
    type: ScriptType;
    url: string;
    data: IAnyObject;
}
export declare const url = "https://unpkg.com/vamtiger-mental-health-botswana-2018-json-ld@latest";
