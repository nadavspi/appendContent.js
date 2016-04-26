(function (factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory(require('jquery'), window);
  } else {
    factory(jQuery, window);
  }
}(function($, window) {
  /**
   * Appends some content to an element and adds a class.
   *
   * @param {Object} options
   * @param {string} options.className - Class name to apply once the content is appended
   * @param {string} options.content - Content to append to the element
   */
  $.fn.appendContent = function(options = {}) {
    const { className, content } = options;
    if (!className || !content) {
      throw new Error('className and content are required options.');
    }

    this.each((i, elem) => {
      const $elem = $(elem);
      if (!$elem.hasClass(className)) {
        $elem.append(content);
        $elem.addClass(className);
      }
    });

    return this;
  };
}));
