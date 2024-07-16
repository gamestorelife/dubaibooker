"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'mamopay/1.6 (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Get up and running with Mamo's APIs in less than 5 minutes.
     *
     *  In this example, we will use the Business Details endpoint to ensure we have the right
     * permissions to interact with Mamo's APIs.
     *
     *  ## How to Use Mamo's API Docs
     *  👈 To the left, you will find all documents, including individual endpoint reference
     * docs. These will include information on various endpoints, their associated methods and
     * the various responses that your code will need to handle.
     *
     *  👉 To the right, there's the search bar, language, base URL, code generator and a *try
     * it from the browser* section.
     *  - Use the **language** section to select the language that you plan on writing your
     * code in.
     *  - Use the **base URL** to select the environment you would like the docs to target. We
     * would recommend that you would start with the sandbox environment while you build and
     * test your app.  And later on switch to the production URL once your flows are tested and
     * are working as expected. Hint, our sandbox environment currently does not require an API
     * key. This way you can get started immediately.
     *  - The **code generator** will automatically create a working code snippet based on the
     * values that you provide on a given page. Feel free to copy and paste this straight into
     * your code.  You can also test this using the *Try It!* button below each section. Note
     * that for production requests, you will be required to provide a valid API Key.
     *
     * ## Payment Link Generation
     *  To generate payment links, you can follow the guide on [Create Payment
     * Link](https://mamopay.readme.io/reference/post_links).
     *
     *  The simplest way to test your integration, is by creating a vanilla payment link that
     * has no custom settings.
     *
     *  ``curl  --location 'https://sandbox.dev.business.mamopay.com/manage_api/v1/links'
     *  --header 'Content-Type: application/json'
     *  --header 'Authorization: Bearer sk-8d88fac2-d3cf-4060-9eaf-ce6b61434c39'
     *  --data '{
     *  "title": "My Business Name",
     *  "return_url": "https://mamopay.com",
     *  "amount": 10
     *  }'``
     *
     *  ## Receive Payments On Your E-Commerce Website
     *  To make payments right on your page, code snipets can be downloaded from your dashboard
     *
     *  ## FAQs
     *  - [API Integration FAQs](https://help.mamopay.com/en/articles/7234144-api-integrations)
     *  - [WooCommerce Integration
     * Guide](https://help.mamopay.com/en/articles/7888469-woocommerce)
     *  - [Shopify Integration Guide](https://help.mamopay.com/en/articles/7991242-shopify)
     *
     *
     * @summary Quick start
     */
    SDK.prototype.get = function () {
        return this.core.fetch('/', 'get');
    };
    /**
     * API to fetch your business info.
     *
     *
     *
     * @summary Fetch Business Info
     * @throws FetchError<403, types.GetMeResponse403> Unauthorised
     * @throws FetchError<404, types.GetMeResponse404> Not Found
     */
    SDK.prototype.getMe = function (metadata) {
        return this.core.fetch('/me', 'get', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
