import {AppRegistry} from 'react-360';
import WallOne from './WallOne';
import WallTwo from './WallTwo';
import WallThree from './WallThree';
import ModelView from './ModelView';
import * as Store from './Store';
Store.initialize();

AppRegistry.registerComponent('WallOne', () => WallOne);
AppRegistry.registerComponent('WallTwo', () => WallTwo);
AppRegistry.registerComponent('WallThree', () => WallThree);
AppRegistry.registerComponent('ModelView', () => ModelView);
