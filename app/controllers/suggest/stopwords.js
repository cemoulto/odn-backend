'use strict';

const stopwords = new Set([
    'and',
    'is',
    'or',
    'the',
    'in',
    'of',
    'that',
    'percent',
    'personal',
    'count',
    'rate',
    'mean',
    'median',
    'average',
    'with',
    'to',
    'over',
    'under',
    'higher',
    'lower',
    'per',
    'related',
    'total',
    'ratio',
    'capita',
    'annual',
    'overall',
    'other',
    'index',
    'what',
    'what\'s',
    'whats',
    'wat',
    'where',
    'when',
    'for',
    'at',
    'are'
]);

class Stopwords {
    /**
     * Extracts all important words from a string ignoring all stopwords.
     */
    static importantWords(string) {
        return string
            .replace(/[\.,]/g, '')
            .replace(/[\\\/]/g, ' ')
            .toLowerCase()
            .split(' ')
            .filter(word => !stopwords.has(word));
    }

    /**
     * Strips all stopwords from the string.
     */
    static strip(string) {
        return Stopwords.importantWords(string).join(' ');
    }
}

module.exports = Stopwords;

