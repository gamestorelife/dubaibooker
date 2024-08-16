declare const DeleteLinksLinkid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly linkId: {
                    readonly type: "string";
                    readonly default: "MB-LINK-6BB7CA8DC7";
                    readonly examples: readonly ["MB-LINK-6BB7CA8DC7"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Payment link ID";
                };
            };
            readonly required: readonly ["linkId"];
        }, {
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
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
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
    };
};
declare const GetCharges: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "integer";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly per_page: {
                    readonly type: "integer";
                    readonly examples: readonly [10];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }, {
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
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly default: "MPB-CHRG-D8B07FB8D7";
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly default: "captured";
                                readonly examples: readonly ["captured"];
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly default: 122.87;
                            };
                            readonly amount_currency: {
                                readonly type: "string";
                                readonly default: "AED";
                            };
                            readonly refund_amount: {
                                readonly type: "string";
                                readonly default: 0;
                            };
                            readonly refund_status: {
                                readonly type: "string";
                                readonly default: "No refund";
                            };
                            readonly billing_descriptor: {
                                readonly type: "string";
                            };
                            readonly custom_data: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly created_date: {
                                readonly type: "string";
                            };
                            readonly subscription_id: {
                                readonly type: "string";
                                readonly description: "Value is set for recurring payments only. For one-time payments, this will be null.";
                            };
                            readonly next_payment_date: {
                                readonly type: "string";
                                readonly description: "Value is set for recurring payments only. For one-time payments, this will be null.";
                            };
                            readonly settlement_amount: {
                                readonly type: "number";
                            };
                            readonly settlement_currency: {
                                readonly type: "string";
                            };
                            readonly settlement_date: {
                                readonly type: "string";
                            };
                            readonly customer_details: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly email: {
                                        readonly type: "string";
                                    };
                                    readonly phone_number: {
                                        readonly type: "string";
                                    };
                                    readonly comment: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly payment_method: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly type: {
                                        readonly type: "string";
                                    };
                                    readonly card_holder_name: {
                                        readonly type: "string";
                                    };
                                    readonly card_last4: {
                                        readonly type: "string";
                                    };
                                    readonly origin: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly settlement_fee: {
                                readonly type: "string";
                            };
                            readonly settlement_vat: {
                                readonly type: "string";
                            };
                            readonly payment_link_id: {
                                readonly type: "string";
                            };
                            readonly payment_link_url: {
                                readonly type: "string";
                            };
                            readonly error_code: {
                                readonly type: "string";
                            };
                            readonly error_message: {
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly pagination_meta: {
                    readonly type: "object";
                    readonly properties: {
                        readonly page: {
                            readonly type: "number";
                            readonly examples: readonly [1];
                        };
                        readonly per_page: {
                            readonly type: "number";
                            readonly examples: readonly [10];
                        };
                        readonly total_pages: {
                            readonly type: "number";
                            readonly examples: readonly [5];
                        };
                        readonly next_page: {
                            readonly type: "number";
                            readonly examples: readonly [2];
                        };
                        readonly prev_page: {
                            readonly type: "number";
                        };
                        readonly from: {
                            readonly type: "number";
                            readonly examples: readonly [1];
                        };
                        readonly to: {
                            readonly type: "number";
                            readonly examples: readonly [10];
                        };
                        readonly total_count: {
                            readonly type: "number";
                            readonly examples: readonly [47];
                        };
                    };
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
    };
};
declare const GetChargesChargeid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly chargeId: {
                    readonly type: "string";
                    readonly default: "MPB-CHRG-E0CE93E071";
                    readonly examples: readonly ["MPB-CHRG-E0CE93E071"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Transaction ID / Charge ID";
                };
            };
            readonly required: readonly ["chargeId"];
        }, {
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
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["confirmation_required", "captured", "refund_initiated", "processing", "failed", "refunded"];
                    readonly examples: readonly ["captured"];
                    readonly description: "`confirmation_required` `captured` `refund_initiated` `processing` `failed` `refunded`";
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["MPB-CHRG-E0CE93E071"];
                };
                readonly amount: {
                    readonly type: "number";
                    readonly examples: readonly [100];
                };
                readonly amount_currency: {
                    readonly type: "string";
                    readonly examples: readonly ["AED"];
                };
                readonly refund_amount: {
                    readonly type: "number";
                };
                readonly refund_status: {
                    readonly type: "string";
                    readonly examples: readonly ["No refund"];
                };
                readonly billing_descriptor: {
                    readonly type: "string";
                    readonly examples: readonly ["Mamo*Merchant"];
                };
                readonly custom_data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly created_date: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-05-31-11-18-57"];
                };
                readonly subscription_id: {
                    readonly type: "string";
                    readonly description: "Value is set for recurring payments only. For one-time payments, this will be null.";
                    readonly examples: readonly ["MPB-SUB-B764EDCBA2"];
                };
                readonly next_payment_date: {
                    readonly type: "string";
                    readonly description: "Value is set for recurring payments only. For one-time payments, this will be null.";
                    readonly examples: readonly ["05/06/2023"];
                };
                readonly settlement_amount: {
                    readonly type: "number";
                    readonly examples: readonly [356.42];
                };
                readonly settlement_currency: {
                    readonly type: "string";
                    readonly examples: readonly ["AED"];
                };
                readonly settlement_date: {
                    readonly type: "string";
                    readonly examples: readonly ["05/06/2023"];
                };
                readonly customer_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Mamo User"];
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly examples: readonly ["email@mamopay.com"];
                        };
                        readonly phone_number: {
                            readonly type: "string";
                            readonly examples: readonly ["+971551234567"];
                        };
                        readonly comment: {
                            readonly type: "string";
                            readonly examples: readonly ["Dolore voluptate possimus et."];
                        };
                    };
                };
                readonly payment_method: {
                    readonly type: "object";
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["CREDIT MASTERCARD", "CREDIT VISA", "CREDIT AMERICAN EXPRESS", "DEBIT MASTERCARD", "DEBIT VISA", "DEBIT AMERICAN EXPRESS"];
                            readonly examples: readonly ["CREDIT VISA"];
                            readonly description: "`CREDIT MASTERCARD` `CREDIT VISA` `CREDIT AMERICAN EXPRESS` `DEBIT MASTERCARD` `DEBIT VISA` `DEBIT AMERICAN EXPRESS`";
                        };
                        readonly card_holder_name: {
                            readonly type: "string";
                            readonly examples: readonly ["Mamo User"];
                        };
                        readonly card_last4: {
                            readonly type: "string";
                            readonly examples: readonly ["•••• 4242"];
                        };
                        readonly origin: {
                            readonly type: "string";
                            readonly examples: readonly ["UAE card"];
                        };
                    };
                };
                readonly error_code: {
                    readonly type: "string";
                    readonly examples: readonly ["generic"];
                };
                readonly error_message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unknown reason - user should contact their bank to find out"];
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
declare const GetLinks: {
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
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly minLength: 1;
                                readonly maxLength: 75;
                                readonly description: "The title of the payment link";
                                readonly default: "Chocolate Box - Small";
                                readonly examples: readonly ["Chocolate Box - Small"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly maxLength: 75;
                                readonly description: "Payment description. This will appear on the payment checkout page.";
                                readonly default: "12pcs Chocolate Box";
                            };
                            readonly capacity: {
                                readonly type: "integer";
                                readonly description: "The number of times a payment link can be used. The capacity will be ignored when the subscription params exist.";
                                readonly default: 1;
                            };
                            readonly active: {
                                readonly type: "boolean";
                                readonly default: true;
                            };
                            readonly return_url: {
                                readonly type: "string";
                                readonly format: "uri";
                                readonly description: "The URL which the customer will be redirected to after a successful payment.";
                                readonly default: "https://myawesomewebsite.com/paymentSuccess";
                            };
                            readonly processing_fee_percentage: {
                                readonly type: "number";
                                readonly minimum: 2;
                                readonly default: 3;
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly minimum: 2;
                                readonly default: 119.99;
                            };
                            readonly amount_currency: {
                                readonly type: "string";
                                readonly enum: readonly ["AED", "USD", "EUR", "GBP", "SAR"];
                                readonly default: "AED";
                                readonly description: "`AED` `USD` `EUR` `GBP` `SAR`";
                            };
                            readonly link_type: {
                                readonly type: "string";
                                readonly enum: readonly ["standalone", "modal", "inline"];
                                readonly description: "Type of link to be created.\n\n`standalone` `modal` `inline`";
                                readonly default: "standalone";
                            };
                            readonly enable_tabby: {
                                readonly type: "boolean";
                                readonly description: "Enables the ability for customers to buy now and pay later.";
                                readonly default: false;
                            };
                            readonly enable_message: {
                                readonly type: "boolean";
                                readonly description: "Enables the ability for customers to add a message during the checkout process.";
                                readonly default: false;
                            };
                            readonly enable_tips: {
                                readonly type: "boolean";
                                readonly description: "Enables the tips option. This will be displayed on the first screen.";
                                readonly default: false;
                            };
                            readonly enable_customer_details: {
                                readonly type: "boolean";
                                readonly description: "Enables adding customer details such as the name, email, and phone number. This screen will be displayed before the payment details screen.";
                                readonly default: false;
                            };
                            readonly enable_quantity: {
                                readonly type: "boolean";
                                readonly description: "When enabled, customers can specify the number of items they intend to purchase. This quantity will serve as a multiplier for the base amount.";
                                readonly default: false;
                            };
                            readonly enable_qr_code: {
                                readonly type: "boolean";
                                readonly description: "Adds the ability to verify a payment through a QR code.";
                                readonly default: false;
                            };
                            readonly send_customer_receipt: {
                                readonly type: "boolean";
                                readonly description: "Enables the sending of customer receipts.";
                                readonly default: false;
                            };
                            readonly save_card: {
                                readonly type: "string";
                                readonly enum: readonly ["off", "optional", "required"];
                                readonly description: "Allows the merchant to enable the option to store card details to be used later on for Merchant Initiated Transactions.\n\n`off` `optional` `required`";
                                readonly default: "off";
                            };
                            readonly payment_methods: {
                                readonly type: "array";
                                readonly description: "An array of accepted payment methods, card always apart of default option. Example: ['card', 'wallet']";
                                readonly items: {};
                            };
                            readonly rules: {
                                readonly type: "object";
                                readonly description: "Setting the rule for payment link";
                                readonly properties: {
                                    readonly allowed: {
                                        readonly type: "array";
                                        readonly description: "An array of one or more rules";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["bins"];
                                                    readonly description: "name of rules\n\n`bins`";
                                                };
                                                readonly list: {
                                                    readonly type: "array";
                                                    readonly description: "value of bins";
                                                    readonly items: {};
                                                };
                                                readonly decline_message: {
                                                    readonly type: "string";
                                                    readonly description: "Custom decline message for this rule";
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            readonly subscription: {
                                readonly type: "object";
                                readonly description: "to be populated if this payment link is for a recurring payment. Otherwise, this property can be left out. REQUIRES Premium Business Plan to be enabled.";
                                readonly properties: {
                                    readonly frequency: {
                                        readonly type: "string";
                                        readonly enum: readonly ["annually", "monthly", "weekly"];
                                        readonly description: "defines the interval that this subscription will be run on.\n\n`annually` `monthly` `weekly`";
                                    };
                                    readonly frequency_interval: {
                                        readonly type: "integer";
                                        readonly minimum: 1;
                                        readonly description: "defines how often this subscription will run. This will be based on the frequency property defined above.";
                                    };
                                    readonly end_date: {
                                        readonly type: "string";
                                        readonly pattern: "\\d{4}\\/\\d{2}\\/\\d{2}";
                                        readonly description: "the last date this subscription could run on.";
                                    };
                                    readonly payment_quantity: {
                                        readonly type: "integer";
                                        readonly description: "number of times this subscription will occur. If end_date defined, end_date takes precedence.";
                                    };
                                };
                            };
                            readonly first_name: {
                                readonly type: "string";
                                readonly description: "The first name of customer which will pre-populate in card info step.";
                            };
                            readonly last_name: {
                                readonly type: "string";
                                readonly description: "The last name of customer which will pre-populate in card info step.";
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly description: "The email of customer which will pre-populate in card info step.";
                            };
                            readonly payouts_share: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly recipient_id: {
                                        readonly type: "string";
                                        readonly description: "The ID of an already added recipient that the transaction amount will be shared with.";
                                    };
                                    readonly percentage_to_recipient: {
                                        readonly type: "number";
                                        readonly description: "The percentage of the transaction amount that will be sent to the recipient.";
                                    };
                                    readonly recipient_pays_fees: {
                                        readonly type: "boolean";
                                        readonly description: "Whether Mamo fees for a given transaction will be passed on to the recipient.";
                                    };
                                };
                            };
                            readonly custom_data: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
                readonly pagination_meta: {
                    readonly type: "object";
                    readonly properties: {
                        readonly page: {
                            readonly type: "number";
                            readonly examples: readonly [1];
                        };
                        readonly per_page: {
                            readonly type: "number";
                            readonly examples: readonly [10];
                        };
                        readonly total_pages: {
                            readonly type: "number";
                            readonly examples: readonly [5];
                        };
                        readonly next_page: {
                            readonly type: "number";
                            readonly examples: readonly [2];
                        };
                        readonly prev_page: {
                            readonly type: "number";
                        };
                        readonly from: {
                            readonly type: "number";
                            readonly examples: readonly [1];
                        };
                        readonly to: {
                            readonly type: "number";
                            readonly examples: readonly [10];
                        };
                        readonly total_count: {
                            readonly type: "number";
                            readonly examples: readonly [47];
                        };
                    };
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
    };
};
declare const GetLinksLinkid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly linkId: {
                    readonly type: "string";
                    readonly default: "MB-LINK-6BB7CA8DC7";
                    readonly examples: readonly ["MB-LINK-6BB7CA8DC7"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Payment link ID";
                };
            };
            readonly required: readonly ["linkId"];
        }, {
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
                readonly name: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly maxLength: 75;
                    readonly description: "The title of the payment link";
                    readonly default: "Chocolate Box - Small";
                    readonly examples: readonly ["Chocolate Box - Small"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly maxLength: 75;
                    readonly description: "Payment description. This will appear on the payment checkout page.";
                    readonly default: "12pcs Chocolate Box";
                    readonly examples: readonly ["12pcs Chocolate Box"];
                };
                readonly capacity: {
                    readonly type: "integer";
                    readonly description: "The number of times a payment link can be used. The capacity will be ignored when the subscription params exist.";
                    readonly default: 1;
                    readonly examples: readonly [1];
                };
                readonly active: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly return_url: {
                    readonly type: "string";
                    readonly format: "uri";
                    readonly description: "The URL which the customer will be redirected to after a successful payment.";
                    readonly default: "https://myawesomewebsite.com/paymentSuccess";
                    readonly examples: readonly ["https://myawesomewebsite.com/paymentSuccess"];
                };
                readonly processing_fee_percentage: {
                    readonly type: "number";
                    readonly minimum: 2;
                    readonly default: 3;
                    readonly examples: readonly [3];
                };
                readonly amount: {
                    readonly type: "number";
                    readonly minimum: 2;
                    readonly default: 119.99;
                    readonly examples: readonly [119.99];
                };
                readonly amount_currency: {
                    readonly type: "string";
                    readonly enum: readonly ["AED", "USD", "EUR", "GBP", "SAR"];
                    readonly default: "AED";
                    readonly examples: readonly ["AED"];
                    readonly description: "`AED` `USD` `EUR` `GBP` `SAR`";
                };
                readonly link_type: {
                    readonly type: "string";
                    readonly enum: readonly ["standalone", "modal", "inline"];
                    readonly description: "Type of link to be created.\n\n`standalone` `modal` `inline`";
                    readonly default: "standalone";
                    readonly examples: readonly ["modal"];
                };
                readonly enable_tabby: {
                    readonly type: "boolean";
                    readonly description: "Enables the ability for customers to buy now and pay later.";
                    readonly default: false;
                    readonly examples: readonly [true];
                };
                readonly enable_message: {
                    readonly type: "boolean";
                    readonly description: "Enables the ability for customers to add a message during the checkout process.";
                    readonly default: false;
                    readonly examples: readonly [true];
                };
                readonly enable_tips: {
                    readonly type: "boolean";
                    readonly description: "Enables the tips option. This will be displayed on the first screen.";
                    readonly default: false;
                    readonly examples: readonly [true];
                };
                readonly enable_customer_details: {
                    readonly type: "boolean";
                    readonly description: "Enables adding customer details such as the name, email, and phone number. This screen will be displayed before the payment details screen.";
                    readonly default: false;
                    readonly examples: readonly [true];
                };
                readonly enable_quantity: {
                    readonly type: "boolean";
                    readonly description: "When enabled, customers can specify the number of items they intend to purchase. This quantity will serve as a multiplier for the base amount.";
                    readonly default: false;
                };
                readonly enable_qr_code: {
                    readonly type: "boolean";
                    readonly description: "Adds the ability to verify a payment through a QR code.";
                    readonly default: false;
                };
                readonly send_customer_receipt: {
                    readonly type: "boolean";
                    readonly description: "Enables the sending of customer receipts.";
                    readonly default: false;
                };
                readonly save_card: {
                    readonly type: "string";
                    readonly enum: readonly ["off", "optional", "required"];
                    readonly description: "Allows the merchant to enable the option to store card details to be used later on for Merchant Initiated Transactions.\n\n`off` `optional` `required`";
                    readonly default: "off";
                    readonly examples: readonly ["optional"];
                };
                readonly payment_methods: {
                    readonly type: "array";
                    readonly description: "An array of accepted payment methods, card always apart of default option. Example: ['card', 'wallet']";
                    readonly items: {};
                };
                readonly rules: {
                    readonly type: "object";
                    readonly description: "Setting the rule for payment link";
                    readonly properties: {
                        readonly allowed: {
                            readonly type: "array";
                            readonly description: "An array of one or more rules";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly type: {
                                        readonly type: "string";
                                        readonly enum: readonly ["bins"];
                                        readonly description: "name of rules\n\n`bins`";
                                        readonly examples: readonly ["bins"];
                                    };
                                    readonly list: {
                                        readonly type: "array";
                                        readonly description: "value of bins";
                                        readonly items: {};
                                    };
                                    readonly decline_message: {
                                        readonly type: "string";
                                        readonly description: "Custom decline message for this rule";
                                    };
                                };
                            };
                        };
                    };
                };
                readonly subscription: {
                    readonly type: "object";
                    readonly description: "to be populated if this payment link is for a recurring payment. Otherwise, this property can be left out. REQUIRES Premium Business Plan to be enabled.";
                    readonly properties: {
                        readonly frequency: {
                            readonly type: "string";
                            readonly enum: readonly ["annually", "monthly", "weekly"];
                            readonly description: "defines the interval that this subscription will be run on.\n\n`annually` `monthly` `weekly`";
                            readonly examples: readonly ["monthly"];
                        };
                        readonly frequency_interval: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "defines how often this subscription will run. This will be based on the frequency property defined above.";
                            readonly examples: readonly [1];
                        };
                        readonly end_date: {
                            readonly type: "string";
                            readonly pattern: "\\d{4}\\/\\d{2}\\/\\d{2}";
                            readonly description: "the last date this subscription could run on.";
                            readonly examples: readonly ["2023/01/31"];
                        };
                        readonly payment_quantity: {
                            readonly type: "integer";
                            readonly description: "number of times this subscription will occur. If end_date defined, end_date takes precedence.";
                            readonly examples: readonly [5];
                        };
                    };
                };
                readonly first_name: {
                    readonly type: "string";
                    readonly description: "The first name of customer which will pre-populate in card info step.";
                    readonly examples: readonly ["first name"];
                };
                readonly last_name: {
                    readonly type: "string";
                    readonly description: "The last name of customer which will pre-populate in card info step.";
                    readonly examples: readonly ["last name"];
                };
                readonly email: {
                    readonly type: "string";
                    readonly description: "The email of customer which will pre-populate in card info step.";
                    readonly examples: readonly ["email@mamopay.com"];
                };
                readonly payouts_share: {
                    readonly type: "object";
                    readonly properties: {
                        readonly recipient_id: {
                            readonly type: "string";
                            readonly description: "The ID of an already added recipient that the transaction amount will be shared with.";
                            readonly examples: readonly ["REP-123"];
                        };
                        readonly percentage_to_recipient: {
                            readonly type: "number";
                            readonly description: "The percentage of the transaction amount that will be sent to the recipient.";
                            readonly examples: readonly [10];
                        };
                        readonly recipient_pays_fees: {
                            readonly type: "boolean";
                            readonly description: "Whether Mamo fees for a given transaction will be passed on to the recipient.";
                        };
                    };
                };
                readonly custom_data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly charges: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly type: "string";
                                readonly enum: readonly ["confirmation_required", "captured", "refund_initiated", "processing", "failed", "refunded"];
                                readonly examples: readonly ["captured"];
                                readonly description: "`confirmation_required` `captured` `refund_initiated` `processing` `failed` `refunded`";
                            };
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly examples: readonly [119.99];
                            };
                            readonly refund_amount: {
                                readonly type: "number";
                            };
                            readonly refund_status: {
                                readonly type: "string";
                            };
                            readonly billing_descriptor: {
                                readonly type: "string";
                            };
                            readonly custom_data: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly created_date: {
                                readonly type: "string";
                            };
                            readonly subscription_id: {
                                readonly type: "string";
                            };
                            readonly settlement_amount: {
                                readonly type: "number";
                            };
                            readonly settlement_currency: {
                                readonly type: "string";
                            };
                            readonly settlement_date: {
                                readonly type: "string";
                            };
                            readonly customer_details: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Chocolate Box - Small"];
                                    };
                                    readonly email: {
                                        readonly type: "string";
                                        readonly examples: readonly ["email@mamopay.com"];
                                    };
                                    readonly phone_number: {
                                        readonly type: "string";
                                    };
                                    readonly comment: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly payment_method: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly type: {
                                        readonly type: "string";
                                    };
                                    readonly card_holder_name: {
                                        readonly type: "string";
                                    };
                                    readonly card_last4: {
                                        readonly type: "string";
                                    };
                                    readonly origin: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
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
                        readonly examples: readonly ["Merchant::Link record was not found"];
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
declare const PatchLinksLinkid: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly minLength: 1;
                readonly maxLength: 75;
                readonly description: "The title of the payment link";
                readonly default: "Chocolate Box - Small";
                readonly examples: readonly ["Chocolate Box - Small"];
            };
            readonly description: {
                readonly type: "string";
                readonly maxLength: 75;
                readonly description: "Payment description. This will appear on the payment checkout page.";
                readonly default: "12pcs Chocolate Box";
                readonly examples: readonly ["12pcs Chocolate Box"];
            };
            readonly capacity: {
                readonly type: "integer";
                readonly description: "The number of times a payment link can be used. The capacity will be ignored when the subscription params exist.";
                readonly default: 1;
                readonly examples: readonly [15];
            };
            readonly active: {
                readonly type: "boolean";
                readonly default: true;
                readonly examples: readonly [true];
            };
            readonly return_url: {
                readonly type: "string";
                readonly format: "uri";
                readonly description: "The URL which the customer will be redirected to after a successful payment.";
                readonly default: "https://myawesomewebsite.com/paymentSuccess";
                readonly examples: readonly ["https://myawesomewebsite.com/paymentSuccess"];
            };
            readonly failure_return_url: {
                readonly type: "string";
                readonly format: "uri";
                readonly description: "The URL which the customer will be redirected to after a failure payment.";
                readonly default: "https://failureurl.com/paymentFailure";
                readonly examples: readonly ["https://failurewebsite.com/paymentFailure"];
            };
            readonly processing_fee_percentage: {
                readonly type: "number";
                readonly minimum: 2;
                readonly default: 3;
                readonly examples: readonly [3];
            };
            readonly amount: {
                readonly type: "number";
                readonly minimum: 2;
                readonly description: "amount could be 0 with save_card 'required' option for card verification";
                readonly default: 119.99;
                readonly examples: readonly [219.99];
            };
            readonly amount_currency: {
                readonly type: "string";
                readonly enum: readonly ["AED", "USD", "EUR", "GBP", "SAR"];
                readonly default: "AED";
                readonly examples: readonly ["AED"];
                readonly description: "Default: AED";
            };
            readonly link_type: {
                readonly type: "string";
                readonly enum: readonly ["standalone", "modal", "inline"];
                readonly description: "Type of link to be created.\n\nDefault: `standalone`";
                readonly default: "standalone";
                readonly examples: readonly ["modal"];
            };
            readonly enable_tabby: {
                readonly type: "boolean";
                readonly description: "Enables the ability for customers to buy now and pay later.";
                readonly default: false;
                readonly examples: readonly [true];
            };
            readonly enable_message: {
                readonly type: "boolean";
                readonly description: "Enables the ability for customers to add a message during the checkout process.";
                readonly default: false;
                readonly examples: readonly [true];
            };
            readonly enable_tips: {
                readonly type: "boolean";
                readonly description: "Enables the tips option. This will be displayed on the first screen.";
                readonly default: false;
                readonly examples: readonly [true];
            };
            readonly save_card: {
                readonly type: "string";
                readonly enum: readonly ["off", "optional", "required"];
                readonly default: "off";
                readonly description: "Allows the merchant to enable the option to store card details to be used later on for Merchant Initiated Transactions.\n\nDefault: `off`";
                readonly examples: readonly ["string"];
            };
            readonly enable_customer_details: {
                readonly type: "boolean";
                readonly description: "Enables adding customer details such as the name, email, and phone number. This screen will be displayed before the payment details screen.";
                readonly default: false;
                readonly examples: readonly [true];
            };
            readonly enable_quantity: {
                readonly type: "boolean";
                readonly description: "When enabled, customers can specify the number of items they intend to purchase. This quantity will serve as a multiplier for the base amount.";
                readonly default: false;
            };
            readonly enable_qr_code: {
                readonly type: "boolean";
                readonly description: "Adds the ability to verify a payment through a QR code.";
                readonly default: false;
            };
            readonly send_customer_receipt: {
                readonly type: "boolean";
                readonly description: "Enables the sending of customer receipts.";
                readonly default: false;
            };
            readonly payment_methods: {
                readonly type: "array";
                readonly description: "An array of accepted payment methods, card always apart of default option. Example: ['card', 'wallet']";
                readonly items: {};
            };
            readonly rules: {
                readonly type: "object";
                readonly description: "Setting the rule for payment link";
                readonly properties: {
                    readonly allowed: {
                        readonly type: "array";
                        readonly description: "An array of one or more rules";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly type: {
                                    readonly type: "string";
                                    readonly enum: readonly ["bins"];
                                    readonly description: "name of rules";
                                    readonly examples: readonly ["bins"];
                                };
                                readonly list: {
                                    readonly type: "array";
                                    readonly description: "value of bins";
                                    readonly items: {};
                                };
                                readonly decline_message: {
                                    readonly type: "string";
                                    readonly description: "Custom decline message for this rule";
                                };
                            };
                        };
                    };
                };
            };
            readonly subscription: {
                readonly type: "object";
                readonly description: "to be populated if this payment link is for a recurring payment. Otherwise, this property can be left out. REQUIRES Premium Business Plan to be enabled.";
                readonly properties: {
                    readonly frequency: {
                        readonly type: "string";
                        readonly enum: readonly ["annually", "monthly", "weekly"];
                        readonly description: "defines the interval that this subscription will be run on.";
                        readonly examples: readonly ["monthly"];
                    };
                    readonly frequency_interval: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly description: "defines how often this subscription will run. This will be based on the frequency property defined above.";
                        readonly examples: readonly [1];
                    };
                    readonly start_date: {
                        readonly type: "string";
                        readonly pattern: "\\d{4}\\/\\d{2}\\/\\d{2}";
                        readonly description: "the first date this subscription will run on.";
                        readonly examples: readonly ["2023/01/01"];
                    };
                    readonly end_date: {
                        readonly type: "string";
                        readonly pattern: "\\d{4}\\/\\d{2}\\/\\d{2}";
                        readonly description: "the last date this subscription could run on.";
                        readonly examples: readonly ["2023/01/31"];
                    };
                    readonly payment_quantity: {
                        readonly type: "integer";
                        readonly description: "number of times this subscription will occur. If end_date defined, end_date takes precedence.";
                        readonly examples: readonly [5];
                    };
                };
            };
            readonly first_name: {
                readonly type: "string";
                readonly description: "The first name of customer which will pre-populate in card info step.";
                readonly examples: readonly ["first name"];
            };
            readonly last_name: {
                readonly type: "string";
                readonly description: "The last name of customer which will pre-populate in card info step.";
                readonly examples: readonly ["last name"];
            };
            readonly email: {
                readonly type: "string";
                readonly description: "The email of customer which will pre-populate in card info step.";
                readonly examples: readonly ["email@mamopay.com"];
            };
            readonly external_id: {
                readonly type: "string";
                readonly examples: readonly ["external_id_1"];
            };
            readonly hold_and_charge_later: {
                readonly type: "boolean";
                readonly default: false;
                readonly description: "Indicates whether to place the payment on hold and charge it later using the \"captures\" API.";
            };
            readonly custom_data: {
                readonly type: "object";
                readonly additionalProperties: true;
            };
            readonly payouts_share: {
                readonly type: "object";
                readonly properties: {
                    readonly recipient_id: {
                        readonly type: "string";
                        readonly description: "The ID of an already added recipient that the transaction amount will be shared with.";
                    };
                    readonly percentage_to_recipient: {
                        readonly type: "number";
                        readonly description: "The percentage of the transaction amount that will be sent to the recipient.";
                    };
                    readonly recipient_pays_fees: {
                        readonly type: "boolean";
                        readonly description: "Whether Mamo fees for a given transaction will be passed on to the recipient.";
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly linkId: {
                    readonly type: "string";
                    readonly default: "MB-LINK-6BB7CA8DC7";
                    readonly examples: readonly ["MB-LINK-6BB7CA8DC7"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Payment link ID";
                };
            };
            readonly required: readonly ["linkId"];
        }, {
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
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["MB-LINK-D8B07FB8C7"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Chocolate Box - Small"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["12pcs Chocolate Box"];
                };
                readonly capacity: {
                    readonly type: "integer";
                    readonly examples: readonly [15];
                };
                readonly active: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly return_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://myawesomewebsite.com/paymentSuccess"];
                };
                readonly failure_return_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://failurewebsite.com/paymentFailure"];
                };
                readonly processing_fee_percentage: {
                    readonly type: "number";
                };
                readonly link_type: {
                    readonly type: "string";
                };
                readonly amount: {
                    readonly type: "number";
                    readonly examples: readonly [219.99];
                };
                readonly amount_currency: {
                    readonly type: "string";
                };
                readonly send_customer_receipt: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly enable_tabby: {
                    readonly type: "boolean";
                };
                readonly enable_message: {
                    readonly type: "boolean";
                };
                readonly enable_tips: {
                    readonly type: "boolean";
                };
                readonly save_card: {
                    readonly type: "string";
                };
                readonly enable_quantity: {
                    readonly type: "boolean";
                };
                readonly enable_customer_details: {
                    readonly type: "boolean";
                };
                readonly payment_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://staging.business.mamopay.com/pay/dong22-579f10"];
                };
                readonly first_name: {
                    readonly type: "string";
                };
                readonly last_name: {
                    readonly type: "string";
                };
                readonly email: {
                    readonly type: "string";
                };
                readonly external_id: {
                    readonly type: "string";
                    readonly examples: readonly ["exteral_id_1"];
                };
                readonly custom_data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly payment_methods: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly rules: {
                    readonly type: "object";
                    readonly properties: {
                        readonly allowed: {
                            readonly type: "object";
                            readonly properties: {
                                readonly type: {
                                    readonly type: "string";
                                    readonly enum: readonly ["bins"];
                                };
                                readonly list: {
                                    readonly type: "array";
                                };
                                readonly decline_message: {
                                    readonly type: "string";
                                };
                            };
                        };
                    };
                };
                readonly subscription: {
                    readonly type: "object";
                    readonly properties: {
                        readonly identifier: {
                            readonly type: "string";
                            readonly examples: readonly ["MPB-SUB-2162171A86"];
                        };
                        readonly repeats_every: {
                            readonly type: "string";
                        };
                        readonly frequency_interval: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly start_date: {
                            readonly type: "string";
                            readonly examples: readonly ["2023/01/01"];
                        };
                        readonly end_date: {
                            readonly type: "string";
                            readonly examples: readonly ["2023/01/31"];
                        };
                        readonly payment_quantity: {
                            readonly type: "integer";
                            readonly examples: readonly [5];
                        };
                        readonly frequency: {
                            readonly type: "string";
                            readonly examples: readonly ["monthly"];
                        };
                    };
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
    };
};
declare const PostCharges: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly card_id: {
                readonly type: "string";
                readonly description: "Saved card ID retrieved from the initial transaction made with MIT-enabled link.";
            };
            readonly amount: {
                readonly type: "number";
                readonly description: "Amount to be charged.";
                readonly default: 10;
                readonly minimum: 1;
                readonly examples: readonly [10];
            };
            readonly currency: {
                readonly type: "string";
                readonly default: "AED";
                readonly description: "The three-letter ISO currency code, default is AED";
            };
            readonly send_customer_receipt: {
                readonly type: "boolean";
                readonly default: true;
                readonly description: "Enables the sending of customer receipts.";
            };
        };
        readonly required: readonly ["card_id", "amount"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
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
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["captured", "failed"];
                    readonly examples: readonly ["captured"];
                    readonly description: "`captured` `failed`";
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["MPB-CHRG-E0CE93E071"];
                };
                readonly amount: {
                    readonly type: "number";
                    readonly examples: readonly [100];
                };
                readonly amount_currency: {
                    readonly type: "string";
                    readonly examples: readonly ["AED"];
                };
                readonly refund_amount: {
                    readonly type: "number";
                };
                readonly refund_status: {
                    readonly type: "string";
                    readonly examples: readonly ["No refund"];
                };
                readonly billing_descriptor: {
                    readonly type: "string";
                    readonly examples: readonly ["Mamo*Merchant"];
                };
                readonly custom_data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly created_date: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-05-31-11-18-57"];
                };
                readonly subscription_id: {
                    readonly type: "string";
                    readonly description: "Value is set for recurring payments only. For one-time payments, this will be null.";
                    readonly examples: readonly ["MPB-SUB-B764EDCBA2"];
                };
                readonly next_payment_date: {
                    readonly type: "string";
                    readonly description: "Value is set for recurring payments only. For one-time payments, this will be null.";
                    readonly examples: readonly ["05/06/2023"];
                };
                readonly settlement_amount: {
                    readonly type: "number";
                    readonly examples: readonly [356.42];
                };
                readonly settlement_currency: {
                    readonly type: "string";
                    readonly examples: readonly ["AED"];
                };
                readonly settlement_date: {
                    readonly type: "string";
                    readonly examples: readonly ["05/06/2023"];
                };
                readonly customer_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Mamo User"];
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly examples: readonly ["email@mamopay.com"];
                        };
                        readonly phone_number: {
                            readonly type: "string";
                            readonly examples: readonly ["+971551234567"];
                        };
                        readonly comment: {
                            readonly type: "string";
                            readonly examples: readonly ["Dolore voluptate possimus et."];
                        };
                    };
                };
                readonly payment_method: {
                    readonly type: "object";
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["CREDIT VISA"];
                        };
                        readonly card_holder_name: {
                            readonly type: "string";
                            readonly examples: readonly ["Mamo User"];
                        };
                        readonly card_last4: {
                            readonly type: "string";
                            readonly examples: readonly ["•••• 4242"];
                        };
                        readonly origin: {
                            readonly type: "string";
                            readonly examples: readonly ["UAE card"];
                        };
                    };
                };
                readonly error_code: {
                    readonly type: "string";
                    readonly examples: readonly ["generic"];
                };
                readonly error_message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unknown reason - user should contact their bank to find out"];
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
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly messages: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["Card does not exist"];
                    };
                };
                readonly error_code: {
                    readonly type: "string";
                    readonly examples: readonly ["UNPROCESSABLE ENTITY"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "number";
                    readonly examples: readonly [500];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostChargesChargeidCaptures: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly amount: {
                readonly type: "number";
                readonly description: "Amount to be captured. Must be less than or equal to the charge's amount.";
                readonly examples: readonly [122.87];
            };
        };
        readonly required: readonly ["amount"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly chargeId: {
                    readonly type: "string";
                    readonly default: "CHG-D8B07FB8D7";
                    readonly examples: readonly ["CHG-D8B07FB8D7"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Transaction ID / Charge ID";
                };
            };
            readonly required: readonly ["chargeId"];
        }, {
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
                readonly id: {
                    readonly type: "string";
                    readonly default: "CHG-D8B07FB8D7";
                };
                readonly status: {
                    readonly type: "string";
                    readonly default: "captured";
                };
                readonly amount: {
                    readonly type: "number";
                    readonly default: 122.87;
                };
                readonly amount_currency: {
                    readonly type: "string";
                    readonly default: "AED";
                };
                readonly refund_amount: {
                    readonly type: "string";
                    readonly default: 0;
                };
                readonly refund_status: {
                    readonly type: "string";
                    readonly default: "No refund";
                };
                readonly billing_descriptor: {
                    readonly type: "string";
                };
                readonly custom_data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly created_date: {
                    readonly type: "string";
                };
                readonly subscription_id: {
                    readonly type: "string";
                    readonly description: "Value is set for recurring payments only. For one-time payments, this will be null.";
                };
                readonly next_payment_date: {
                    readonly type: "string";
                    readonly description: "Value is set for recurring payments only. For one-time payments, this will be null.";
                };
                readonly settlement_amount: {
                    readonly type: "number";
                };
                readonly settlement_currency: {
                    readonly type: "string";
                };
                readonly settlement_date: {
                    readonly type: "string";
                };
                readonly customer_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly email: {
                            readonly type: "string";
                        };
                        readonly phone_number: {
                            readonly type: "string";
                        };
                        readonly comment: {
                            readonly type: "string";
                        };
                    };
                };
                readonly payment_method: {
                    readonly type: "object";
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                        };
                        readonly card_holder_name: {
                            readonly type: "string";
                        };
                        readonly card_last4: {
                            readonly type: "string";
                        };
                        readonly origin: {
                            readonly type: "string";
                        };
                    };
                };
                readonly settlement_fee: {
                    readonly type: "string";
                };
                readonly settlement_vat: {
                    readonly type: "string";
                };
                readonly payment_link_id: {
                    readonly type: "string";
                };
                readonly payment_link_url: {
                    readonly type: "string";
                };
                readonly error_code: {
                    readonly type: "string";
                };
                readonly error_message: {
                    readonly type: "string";
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
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly messages: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["Can not capture this payment"];
                    };
                };
                readonly error_code: {
                    readonly type: "string";
                    readonly examples: readonly ["UNPROCESSABLE ENTITY"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "number";
                    readonly examples: readonly [500];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostChargesChargeidRefunds: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly amount: {
                readonly type: "number";
                readonly description: "Amount to be refunded. Only AED transfers supported";
                readonly default: 10;
                readonly minimum: 1;
                readonly examples: readonly [10];
            };
        };
        readonly required: readonly ["amount"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly chargeId: {
                    readonly type: "string";
                    readonly default: "MB-LINK-D8B07FB8C7";
                    readonly examples: readonly ["MB-LINK-D8B07FB8C7"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Transaction ID / Charge ID";
                };
            };
            readonly required: readonly ["chargeId"];
        }, {
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
                readonly refund_status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly refund_amount: {
                    readonly type: "number";
                    readonly examples: readonly ["20.0,"];
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
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly messages: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["Can not refund this payment"];
                    };
                };
                readonly error_code: {
                    readonly type: "string";
                    readonly examples: readonly ["UNPROCESSABLE ENTITY"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "number";
                    readonly examples: readonly [500];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostChargesChargeidReverses: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly chargeId: {
                    readonly type: "string";
                    readonly default: "CHG-D8B07FB8D7";
                    readonly examples: readonly ["CHG-D8B07FB8D7"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Transaction ID / Charge ID";
                };
            };
            readonly required: readonly ["chargeId"];
        }, {
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
                readonly id: {
                    readonly type: "string";
                    readonly default: "CHG-D8B07FB8D7";
                };
                readonly status: {
                    readonly type: "string";
                    readonly default: "voided";
                };
                readonly amount: {
                    readonly type: "number";
                    readonly default: 122.87;
                };
                readonly amount_currency: {
                    readonly type: "string";
                    readonly default: "AED";
                };
                readonly refund_amount: {
                    readonly type: "string";
                    readonly default: 0;
                };
                readonly refund_status: {
                    readonly type: "string";
                    readonly default: "No refund";
                };
                readonly billing_descriptor: {
                    readonly type: "string";
                };
                readonly custom_data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly created_date: {
                    readonly type: "string";
                };
                readonly subscription_id: {
                    readonly type: "string";
                    readonly description: "Value is set for recurring payments only. For one-time payments, this will be null.";
                };
                readonly next_payment_date: {
                    readonly type: "string";
                    readonly description: "Value is set for recurring payments only. For one-time payments, this will be null.";
                };
                readonly settlement_amount: {
                    readonly type: "number";
                };
                readonly settlement_currency: {
                    readonly type: "string";
                };
                readonly settlement_date: {
                    readonly type: "string";
                };
                readonly customer_details: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly email: {
                            readonly type: "string";
                        };
                        readonly phone_number: {
                            readonly type: "string";
                        };
                        readonly comment: {
                            readonly type: "string";
                        };
                    };
                };
                readonly payment_method: {
                    readonly type: "object";
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                        };
                        readonly card_holder_name: {
                            readonly type: "string";
                        };
                        readonly card_last4: {
                            readonly type: "string";
                        };
                        readonly origin: {
                            readonly type: "string";
                        };
                    };
                };
                readonly settlement_fee: {
                    readonly type: "string";
                };
                readonly settlement_vat: {
                    readonly type: "string";
                };
                readonly payment_link_id: {
                    readonly type: "string";
                };
                readonly payment_link_url: {
                    readonly type: "string";
                };
                readonly error_code: {
                    readonly type: "string";
                };
                readonly error_message: {
                    readonly type: "string";
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
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly messages: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["Can not reverse this payment"];
                    };
                };
                readonly error_code: {
                    readonly type: "string";
                    readonly examples: readonly ["UNPROCESSABLE ENTITY"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "number";
                    readonly examples: readonly [500];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostLinks: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly title: {
                readonly type: "string";
                readonly minLength: 1;
                readonly maxLength: 75;
                readonly description: "The title of the payment link";
                readonly default: "Chocolate Box - Small";
                readonly examples: readonly ["Chocolate Box - Small"];
            };
            readonly description: {
                readonly type: "string";
                readonly maxLength: 75;
                readonly description: "Payment description. This will appear on the payment checkout page.";
                readonly default: "12pcs Chocolate Box";
                readonly examples: readonly ["12pcs Chocolate Box"];
            };
            readonly capacity: {
                readonly type: "integer";
                readonly description: "The number of times a payment link can be used, if null the link can be used indefinitely. The capacity will be ignored when the subscription params exist.";
                readonly examples: readonly [1];
            };
            readonly active: {
                readonly type: "boolean";
                readonly default: true;
                readonly examples: readonly [true];
            };
            readonly return_url: {
                readonly type: "string";
                readonly format: "uri";
                readonly description: "The URL which the customer will be redirected to after a successful payment.";
                readonly default: "https://myawesomewebsite.com/paymentSuccess";
                readonly examples: readonly ["https://myawesomewebsite.com/paymentSuccess"];
            };
            readonly failure_return_url: {
                readonly type: "string";
                readonly format: "uri";
                readonly description: "The URL which the customer will be redirected to after a failure payment.";
                readonly default: "https://failureurl.com/paymentFailure";
                readonly examples: readonly ["https://failurewebsite.com/paymentFailure"];
            };
            readonly processing_fee_percentage: {
                readonly type: "number";
                readonly minimum: 2;
                readonly default: 3;
                readonly examples: readonly [3];
            };
            readonly amount: {
                readonly type: "number";
                readonly minimum: 2;
                readonly description: "amount could be 0 with save_card 'required' option for card verification";
                readonly default: 119.99;
                readonly examples: readonly [119.99];
            };
            readonly amount_currency: {
                readonly type: "string";
                readonly enum: readonly ["AED", "USD", "EUR", "GBP", "SAR"];
                readonly default: "AED";
                readonly examples: readonly ["AED"];
                readonly description: "Default: AED";
            };
            readonly link_type: {
                readonly type: "string";
                readonly enum: readonly ["standalone", "modal", "inline"];
                readonly description: "Type of link to be created.\n\nDefault: `standalone`";
                readonly default: "standalone";
                readonly examples: readonly ["modal"];
            };
            readonly enable_tabby: {
                readonly type: "boolean";
                readonly description: "Enables the ability for customers to buy now and pay later.";
                readonly default: false;
                readonly examples: readonly [true];
            };
            readonly enable_message: {
                readonly type: "boolean";
                readonly description: "Enables the ability for customers to add a message during the checkout process.";
                readonly default: false;
                readonly examples: readonly [true];
            };
            readonly enable_tips: {
                readonly type: "boolean";
                readonly description: "Enables the tips option. This will be displayed on the first screen.";
                readonly default: false;
                readonly examples: readonly [true];
            };
            readonly save_card: {
                readonly type: "string";
                readonly enum: readonly ["off", "optional", "required"];
                readonly description: "Allows the merchant to enable the option to store card details to be used later on for Merchant Initiated Transactions.\n\nDefault: `off`";
                readonly default: "off";
                readonly examples: readonly ["optional"];
            };
            readonly enable_customer_details: {
                readonly type: "boolean";
                readonly description: "Enables adding customer details such as the name, email, and phone number. This screen will be displayed before the payment details screen.";
                readonly default: false;
                readonly examples: readonly [true];
            };
            readonly enable_quantity: {
                readonly type: "boolean";
                readonly description: "When enabled, customers can specify the number of items they intend to purchase. This quantity will serve as a multiplier for the base amount.";
                readonly default: false;
            };
            readonly enable_qr_code: {
                readonly type: "boolean";
                readonly description: "Adds the ability to verify a payment through a QR code.";
                readonly default: false;
            };
            readonly send_customer_receipt: {
                readonly type: "boolean";
                readonly description: "Enables the sending of customer receipts.";
                readonly default: false;
            };
            readonly payment_methods: {
                readonly type: "array";
                readonly description: "An array of the accepted payment methods, with 'card' always included as the default option, and wallet for Apple Pay and Google Pay. Example to accept all: ['card', 'wallet']";
                readonly items: {};
            };
            readonly rules: {
                readonly type: "object";
                readonly description: "Setting the rule for payment link";
                readonly properties: {
                    readonly allowed: {
                        readonly type: "array";
                        readonly description: "An array of one or more rules";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly type: {
                                    readonly type: "string";
                                    readonly enum: readonly ["bins"];
                                    readonly description: "name of rules";
                                    readonly examples: readonly ["bins"];
                                };
                                readonly list: {
                                    readonly type: "array";
                                    readonly description: "value of bins";
                                    readonly items: {};
                                };
                                readonly decline_message: {
                                    readonly type: "string";
                                    readonly description: "Custom decline message for this rule";
                                };
                            };
                        };
                    };
                };
            };
            readonly subscription: {
                readonly type: "object";
                readonly description: "to be populated if this payment link is for a recurring payment. Otherwise, this property can be left out. REQUIRES Premium Business Plan to be enabled.";
                readonly properties: {
                    readonly frequency: {
                        readonly type: "string";
                        readonly enum: readonly ["annually", "monthly", "weekly"];
                        readonly description: "defines the interval that this subscription will be run on.";
                        readonly examples: readonly ["monthly"];
                    };
                    readonly frequency_interval: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly description: "defines how often this subscription will run. This will be based on the frequency property defined above.";
                        readonly examples: readonly [1];
                    };
                    readonly start_date: {
                        readonly type: "string";
                        readonly pattern: "\\d{4}\\/\\d{2}\\/\\d{2}";
                        readonly description: "the first date this subscription will run on.";
                        readonly examples: readonly ["2023/01/01"];
                    };
                    readonly end_date: {
                        readonly type: "string";
                        readonly pattern: "\\d{4}\\/\\d{2}\\/\\d{2}";
                        readonly description: "the last date this subscription could run on.";
                        readonly examples: readonly ["2023/02/31"];
                    };
                    readonly payment_quantity: {
                        readonly type: "integer";
                        readonly description: "number of times this subscription will occur. If end_date defined, end_date takes precedence.";
                        readonly examples: readonly [5];
                    };
                };
            };
            readonly first_name: {
                readonly type: "string";
                readonly description: "The first name of customer which will pre-populate in card info step.";
                readonly examples: readonly ["first name"];
            };
            readonly last_name: {
                readonly type: "string";
                readonly description: "The last name of customer which will pre-populate in card info step.";
                readonly examples: readonly ["last name"];
            };
            readonly email: {
                readonly type: "string";
                readonly description: "The email of customer which will pre-populate in card info step.";
                readonly examples: readonly ["email@mamopay.com"];
            };
            readonly custom_data: {
                readonly type: "object";
                readonly additionalProperties: true;
            };
            readonly external_id: {
                readonly type: "string";
                readonly description: "The external ID of your choice to associate with payments captured by this payment link.";
                readonly examples: readonly ["ORDER-12345"];
            };
            readonly hold_and_charge_later: {
                readonly type: "boolean";
                readonly default: false;
                readonly description: "Indicates whether to place the payment on hold and charge it later using the \"captures\" API.";
            };
            readonly payouts_share: {
                readonly type: "object";
                readonly properties: {
                    readonly recipient_id: {
                        readonly type: "string";
                        readonly description: "The ID of an already added recipient that the transaction amount will be shared with.";
                    };
                    readonly percentage_to_recipient: {
                        readonly type: "number";
                        readonly description: "The percentage of the transaction amount that will be sent to the recipient.";
                    };
                    readonly recipient_pays_fees: {
                        readonly type: "boolean";
                        readonly description: "Whether Mamo fees for a given transaction will be passed on to the recipient.";
                    };
                };
            };
        };
        readonly required: readonly ["title"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
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
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["MB-LINK-D8B07FB8C7"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["Chocolate Box - Small"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["12pcs Chocolate Box"];
                };
                readonly capacity: {
                    readonly type: "integer";
                    readonly examples: readonly [10];
                };
                readonly active: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly return_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://myawesomewebsite.com/paymentSuccess"];
                };
                readonly failure_return_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://myfailureurl.com/paymentFailure"];
                };
                readonly processing_fee_percentage: {
                    readonly type: "number";
                };
                readonly link_type: {
                    readonly type: "string";
                };
                readonly amount: {
                    readonly type: "number";
                    readonly examples: readonly [119.99];
                };
                readonly amount_currency: {
                    readonly type: "string";
                };
                readonly send_customer_receipt: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly enable_tabby: {
                    readonly type: "boolean";
                };
                readonly enable_message: {
                    readonly type: "boolean";
                };
                readonly enable_tips: {
                    readonly type: "boolean";
                };
                readonly save_card: {
                    readonly type: "string";
                };
                readonly enable_quantity: {
                    readonly type: "boolean";
                };
                readonly enable_customer_details: {
                    readonly type: "boolean";
                };
                readonly payment_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://staging.business.mamopay.com/pay/dong22-579f10"];
                };
                readonly first_name: {
                    readonly type: "string";
                };
                readonly last_name: {
                    readonly type: "string";
                };
                readonly email: {
                    readonly type: "string";
                };
                readonly custom_data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly external_id: {
                    readonly type: "string";
                    readonly examples: readonly ["ORDER-12345"];
                };
                readonly payment_methods: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly rules: {
                    readonly type: "object";
                    readonly properties: {
                        readonly allowed: {
                            readonly type: "object";
                            readonly properties: {
                                readonly type: {
                                    readonly type: "string";
                                    readonly enum: readonly ["bins"];
                                };
                                readonly list: {
                                    readonly type: "array";
                                };
                                readonly decline_message: {
                                    readonly type: "string";
                                };
                            };
                        };
                    };
                };
                readonly subscription: {
                    readonly type: "object";
                    readonly properties: {
                        readonly identifier: {
                            readonly type: "string";
                            readonly examples: readonly ["MPB-SUB-2162171A86"];
                        };
                        readonly repeats_every: {
                            readonly type: "string";
                        };
                        readonly frequency_interval: {
                            readonly type: "integer";
                            readonly examples: readonly [1];
                        };
                        readonly start_date: {
                            readonly type: "string";
                            readonly examples: readonly ["2023/01/31"];
                        };
                        readonly end_date: {
                            readonly type: "string";
                            readonly examples: readonly ["2023/03/31"];
                        };
                        readonly payment_quantity: {
                            readonly type: "integer";
                            readonly examples: readonly [5];
                        };
                        readonly frequency: {
                            readonly type: "string";
                            readonly examples: readonly ["monthly"];
                        };
                    };
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
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly messages: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly error_code: {
                    readonly type: "string";
                    readonly examples: readonly ["VALIDATION_FAILED"];
                };
                readonly errors: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { DeleteLinksLinkid, GetCharges, GetChargesChargeid, GetLinks, GetLinksLinkid, PatchLinksLinkid, PostCharges, PostChargesChargeidCaptures, PostChargesChargeidRefunds, PostChargesChargeidReverses, PostLinks };
