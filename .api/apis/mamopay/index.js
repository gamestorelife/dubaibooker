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
     * API to generate vanilla and subscription payment links.
     *  ### Payment Status
     *  Once your customer completes a payment, the redirect URL will be appended with the
     * following params
     *  - createdAt: The date the charge was captured at
     *  - paymentLinkId: The payment link id
     *  - status: indicates the payment status, whether captured or failed
     *  - transactionId: The transaction / charge id related to the payment
     *
     *  You may also get notified about a payment's status by setting up a webhook. Details
     * [here](https://mamopay.readme.io/reference/post_webhooks)
     *
     *  A third approach to check the transaction status is by calling our transaction info API
     * [here](https://mamopay.readme.io/reference/get_charges-chargeid)
     *
     *  **Sample redirect url after a successful payment**
     *  https://www.mamopay.com/?createdAt=2023-08-09-16-42-35&paymentLinkId=MB-LINK-3216D27C9D&status=captured&transactionId=MPB-CHRG-BEE56990A9
     *
     *
     * ### For Payment Testing
     *  To make payments with different use cases on the test environment, you can use the card
     * details below:
     *
     * | Card Number                                                   | Payment Status | 3DS |
     * Address Required | Country |
     *  |:-------------------------------------------------------------:|:---------------------:|:-------:|:-------:|:-----:|
     *  | 4659 1055 6905 1157                                           | Success    | X  | X
     * | GB |
     *  | 4242 4242 4242 4242                                           | Success    | ✓  | X
     * | GB |
     *  | 4111 1111 1111 1111                                           | Success    | ✓  | ✓
     * | US |
     *  | 4567 3613 2598 1788                                           | Fail       | X  | X
     * | GB |
     *  | 4095 2548 0264 2505                                           | Fail       | X  | ✓
     * | US |
     *
     * - CVV: 123
     *  - Expiry: 01/28
     *
     *
     *  ### 3DS
     *  If prompted for a password, enter **Checkout1!**
     *
     *  ### Subscriptions
     *  When setting up subscriptions, if both end_date and payment_quantity were defined,
     * end_date takes precedence.
     *
     *
     *
     * @summary Create Payment Link
     * @throws FetchError<403, types.PostLinksResponse403> Unauthorised
     * @throws FetchError<422, types.PostLinksResponse422> Unprocessable entity
     */
    SDK.prototype.postLinks = function (body, metadata) {
        return this.core.fetch('/links', 'post', body, metadata);
    };
    /**
     * Fetches all payment links for a given business
     *
     *
     *
     * @summary Fetching Payment Links
     * @throws FetchError<403, types.GetLinksResponse403> Unauthorised
     */
    SDK.prototype.getLinks = function (metadata) {
        return this.core.fetch('/links', 'get', metadata);
    };
    SDK.prototype.patchLinksLinkid = function (body, metadata) {
        return this.core.fetch('/links/{linkId}', 'patch', body, metadata);
    };
    /**
     * Allows a user to delete payment link
     *
     *
     *
     * @summary Delete Payment Link
     * @throws FetchError<403, types.DeleteLinksLinkidResponse403> Unauthorised
     */
    SDK.prototype.deleteLinksLinkid = function (metadata) {
        return this.core.fetch('/links/{linkId}', 'delete', metadata);
    };
    /**
     * Allows a user to fetch payment link details
     *
     *
     *
     * @summary Fetch Payment Link Info
     * @throws FetchError<403, types.GetLinksLinkidResponse403> Unauthorised
     * @throws FetchError<404, types.GetLinksLinkidResponse404> Not Found
     */
    SDK.prototype.getLinksLinkid = function (metadata) {
        return this.core.fetch('/links/{linkId}', 'get', metadata);
    };
    /**
     * Fetches all transactions for a given business
     *
     *
     *
     * @summary Fetching Transactions
     * @throws FetchError<403, types.GetChargesResponse403> Unauthorised
     */
    SDK.prototype.getCharges = function (metadata) {
        return this.core.fetch('/charges', 'get', metadata);
    };
    /**
     * API to initiate transactions by merchant.
     *  ### About MIT (Merchant Initiated Transaction)
     *  Merchant Initiated Transactions (MIT) allows a business to use card details, that were
     * stored during previous transactions, to charge their customers.
     *
     *  ### How do MITs work?
     *  1- You request a payment link with the option to save the card details.
     *  2- You save the charge ID.
     *  3- You get the charge details (redirect, GET /charge, or webhook)  which will include
     * the ID of the card used to make the payment, you can save either one of the IDs so you
     * always have access to the card ID.
     *  4- You call the below API to initiate a transaction using the same card.
     *
     * @summary Initiate Payment
     * @throws FetchError<403, types.PostChargesResponse403> Unauthorised
     * @throws FetchError<422, types.PostChargesResponse422> Unprocessable Entity
     * @throws FetchError<500, types.PostChargesResponse500> Unexpected error
     */
    SDK.prototype.postCharges = function (body, metadata) {
        return this.core.fetch('/charges', 'post', body, metadata);
    };
    /**
     * This API enables you to retrieve detailed information about a specific charge by
     * providing the charge ID.
     *  It is designed to give you a comprehensive view of transaction details.
     *
     *
     *
     * @summary Fetch Transaction Info
     * @throws FetchError<403, types.GetChargesChargeidResponse403> Unauthorised
     * @throws FetchError<404, types.GetChargesChargeidResponse404> Not Found
     */
    SDK.prototype.getChargesChargeid = function (metadata) {
        return this.core.fetch('/charges/{chargeId}', 'get', metadata);
    };
    /**
     * API to refund the charge.
     *
     *
     *
     * @summary Refund Payment
     * @throws FetchError<403, types.PostChargesChargeidRefundsResponse403> Unauthorised
     * @throws FetchError<422, types.PostChargesChargeidRefundsResponse422> Unprocessable Entity
     * @throws FetchError<500, types.PostChargesChargeidRefundsResponse500> Unexpected error
     */
    SDK.prototype.postChargesChargeidRefunds = function (body, metadata) {
        return this.core.fetch('/charges/{chargeId}/refunds', 'post', body, metadata);
    };
    /**
     * API to capture an "On hold" charge.
     *
     *
     *
     * @summary Capture Payment
     * @throws FetchError<403, types.PostChargesChargeidCapturesResponse403> Unauthorised
     * @throws FetchError<422, types.PostChargesChargeidCapturesResponse422> Unprocessable Entity
     * @throws FetchError<500, types.PostChargesChargeidCapturesResponse500> Unexpected error
     */
    SDK.prototype.postChargesChargeidCaptures = function (body, metadata) {
        return this.core.fetch('/charges/{chargeId}/captures', 'post', body, metadata);
    };
    /**
     * API to reverse an "On hold" charge.
     *
     *
     *
     * @summary Reverse Payment
     * @throws FetchError<403, types.PostChargesChargeidReversesResponse403> Unauthorised
     * @throws FetchError<422, types.PostChargesChargeidReversesResponse422> Unprocessable Entity
     * @throws FetchError<500, types.PostChargesChargeidReversesResponse500> Unexpected error
     */
    SDK.prototype.postChargesChargeidReverses = function (metadata) {
        return this.core.fetch('/charges/{chargeId}/reverses', 'post', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
