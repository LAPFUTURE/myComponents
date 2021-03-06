/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import Form from './Form';

/**
 * This class creates fieldset containers.
 *
 * @-x-less FieldSet.less
 * @class tinymce.ui.FieldSet
 * @extends tinymce.ui.Form
 */

export default Form.extend({
  Defaults: {
    containerCls: 'fieldset',
    layout: 'flex',
    direction: 'column',
    align: 'stretch',
    flex: 1,
    padding: '25 15 5 15',
    labelGap: 30,
    spacing: 10,
    border: 1
  },

  /**
   * Renders the control as a HTML string.
   *
   * @method renderHtml
   * @return {String} HTML representing the control.
   */
  renderHtml () {
    const self = this, layout = self._layout, prefix = self.classPrefix;

    self.preRender();
    layout.preRender(self);

    return (
      '<fieldset id="' + self._id + '" class="' + self.classes + '" hidefocus="1" tabindex="-1">' +
      (self.settings.title ? ('<legend id="' + self._id + '-title" class="' + prefix + 'fieldset-title">' +
        self.settings.title + '</legend>') : '') +
      '<div id="' + self._id + '-body" class="' + self.bodyClasses + '">' +
      (self.settings.html || '') + layout.renderHtml(self) +
      '</div>' +
      '</fieldset>'
    );
  }
});