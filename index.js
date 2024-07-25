/**
 * @format
 */

import { AppRegistry, Text } from 'react-native';
import App from './src/app';
import { name as appName } from './app.json';

import './src/localization/i18n'

if (Text.defaultProps === null) {
    Text.defaultProps = {}
    Text.defaultProps.allowFontScaling = false
}

AppRegistry.registerComponent(appName, () => App);
