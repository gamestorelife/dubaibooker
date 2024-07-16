import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';
export type GetMeMetadataParam = FromSchema<typeof schemas.GetMe.metadata>;
export type GetMeResponse200 = FromSchema<typeof schemas.GetMe.response['200']>;
export type GetMeResponse403 = FromSchema<typeof schemas.GetMe.response['403']>;
export type GetMeResponse404 = FromSchema<typeof schemas.GetMe.response['404']>;
