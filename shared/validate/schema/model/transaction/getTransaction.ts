import { API_ACTION_TYPES } from 'shared/driver/socket/codes';
import {
    ALLOWED_TRANSACTION_TYPES_ARRAY,
    PAGINATION_SCHEME,
    DEFAULT_OFFSET_SCHEMA,
    TRANSACTIONS_LIMIT_SCHEMA,
} from 'shared/validate/schema/common';

export const SCHEMAS_TRANSACTIONS = [
    {
        id: API_ACTION_TYPES.GET_TRANSACTION,
        type: 'object',
        properties: {
            id: {
                type: 'string',
                format: 'id',
            },
        },
        required: ['id'],
    },
    {
        id: API_ACTION_TYPES.GET_TRANSACTIONS,
        type: 'object',
        properties: {
            filter: {
                type: 'object',
                properties: {
                    type: {
                        type: 'integer',
                        enum: ALLOWED_TRANSACTION_TYPES_ARRAY
                    },
                    blockId: {
                        type: 'string',
                        format: 'id'
                    },
                    senderPublicKey: {
                        type: 'string',
                        format: 'publicKey'
                    },
                    height: {
                        type: 'integer',
                        minimum: 1,
                    }
                }
            },
            sort: {
                type: 'array',
                items: {
                    type: 'array',
                    items: {
                        type: 'string',
                        enum: ['ASC', 'DESC', 'createdAt', 'blockId', 'type'],
                    }
                }
            },
            offset: DEFAULT_OFFSET_SCHEMA,
            limit: TRANSACTIONS_LIMIT_SCHEMA,
        },
        required: ['limit', 'offset'],
    },
    {
        id: API_ACTION_TYPES.GET_TRANSACTIONS_BY_BLOCK_ID,
        type: 'object',
        properties: {
            blockId: {
                type: 'string',
                format: 'id'
            },
            offset: DEFAULT_OFFSET_SCHEMA,
            limit: TRANSACTIONS_LIMIT_SCHEMA,
        },
        required: ['blockId', 'limit', 'offset'],
    },
    {
        id: API_ACTION_TYPES.GET_TRANSACTIONS_BY_HEIGHT,
        type: 'object',
        properties: {
            offset: DEFAULT_OFFSET_SCHEMA,
            limit: TRANSACTIONS_LIMIT_SCHEMA,
            height: {
                type: 'integer',
                minimum: 1,
            }
        },
        required: ['height', 'limit', 'offset'],
    },
];
