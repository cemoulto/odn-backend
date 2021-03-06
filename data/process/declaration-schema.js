'use strict';

module.exports = {
    definitions: {
        variable: {
            type: 'object',
            properties: {
                id: {type: 'string'},
                name: {type: 'string'},
                url: {type: 'string'}
            },
            required: ['id', 'name', 'url']
        },

        attribution: {
            type: 'object',
            properties: {
                name: {type: 'string'},
                url: {type: 'string'}
            },
            required: ['name', 'url']
        },

        dataset: {
            type: 'object',
            properties: {
                id: {type: 'string'},
                name: {type: 'string'},
                domain: {type: 'string'},
                fxf: {type: 'string'},
                searchTerms: {
                    type: 'array',
                    items: {type: 'string'}
                },
                description: {type: 'string'},
                attributions: {
                    type: 'array',
                    items: {'$ref': '#/definitions/attribution'},
                    minItems: 1
                },
                constraints: {
                    type: 'array',
                    items: {type: 'string'}
                },
                variables: {
                    type: 'object',
                    patternProperties: {
                        '.{1,}': {'$ref': '#/definitions/variable'}
                    }
                }
            },
            required: ['id', 'name', 'domain', 'fxf', 'constraints', 'variables', 'searchTerms', 'description']
        },

        topic: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    description: 'Unique identifier for the topic e.g. demographics.population.',
                },
                name: {type: 'string'},
                topics: {
                    type: 'object',
                    patternProperties: {
                        '.{1,}': {'$ref': '#/definitions/topic'}
                    }
                },
                datasets: {
                    type: 'object',
                    patternProperties: {
                        '.{1,}': {'$ref': '#/definitions/dataset'}
                    }
                }
            },
            required: ['id', 'name']
        }
    },

    type: 'object',
    properties: {
        topics: {
            type: 'object',
            patternProperties: {
                '.{1,}': {'$ref': '#/definitions/topic'}
            }
        },
        required: ['topics']
    }
};

