'use strict';

const assert = require('assert');
const unescape = require('../');

describe('unscape-html', () => {
  it('converts &amp; into &', () => {
    assert.equal(unescape('&amp;'), '&');
  });

  it('converts &lt; into <', () => {
    assert.equal(unescape('&lt;'), '<');
  });

  it('converts &gt; into >', () => {
    assert.equal(unescape('&gt;'), '>');
  });

  it("converts &#39; into '", () => {
    assert.equal(unescape('&#39;'), "'");
  });

  it('converts &quot; into "', () => {
    assert.equal(unescape('&quot;'), '"');
  });

  it('converts numbers into text', () => {
    assert.equal(
      unescape('javascript&#58;alert(1&#41;'),
      'javascript:alert(1)'
    );
  });

  it('does not remove text', () => {
    assert.equal(unescape('hi &amp;hi'), 'hi &hi');
  });
});
