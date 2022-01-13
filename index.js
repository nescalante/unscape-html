'use strict';

/**
 * unescape special characters in the given string of html.
 *
 * @param  {String} html
 * @return {String}
 */

module.exports = function (html) {
  return String(html)
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x3A;/g, ':')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, function (_, n) {
      n = n.toLowerCase();

      if (n === 'colon') {
        return ':';
      }

      if (n.charAt(0) === '#') {
        return n.charAt(1) === 'x'
          ? String.fromCharCode(parseInt(n.substring(2), 16))
          : String.fromCharCode(+n.substring(1));
      }

      return n;
    });
};
