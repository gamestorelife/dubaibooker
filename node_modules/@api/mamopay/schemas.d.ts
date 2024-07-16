declare const GetMe: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "Content-Type": {
                    readonly type: "string";
                    readonly examples: readonly ["application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly Authorization: {
                    readonly type: "string";
                    readonly examples: readonly ["Bearer <your sandbox api key>"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly business_name: {
                    readonly type: "string";
                    readonly examples: readonly ["MAMO"];
                };
                readonly business_tag: {
                    readonly type: "string";
                    readonly examples: readonly ["mamo"];
                };
                readonly website: {
                    readonly type: "string";
                    readonly examples: readonly ["https://www.mamopay.com/"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly messages: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["Unauthorized"];
                    };
                };
                readonly error_code: {
                    readonly type: "string";
                    readonly examples: readonly ["UNAUTHORIZED"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly messages: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["Charge record was not found"];
                    };
                };
                readonly error_code: {
                    readonly type: "string";
                    readonly examples: readonly ["RECORD_NOT_FOUND"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { GetMe };
