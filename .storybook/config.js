import { configure, setAddon } from '@storybook/react';
import infoAddon, { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

import {} from '../style/base'

setOptions({
  name: 'bootglamor',
  url: '#',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  sortStoriesByKind: true,
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
});

// addon-info
setDefaults({
  inline: true,
  header: false,
  source: true,
  styles: {
    propTableHead: {
      margin: '20px 0 10px'
    }
  },
  maxPropsIntoLine: 1
});

function loadStories() {
  require('../stories/index.js');
}

setAddon(infoAddon);

configure(loadStories, module);
