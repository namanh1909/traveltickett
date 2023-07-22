// @flow

import Metrics from 'assets/metrics';
import { Themes } from 'assets/themes';
import { Platform, Dimensions } from 'react-native';


const deviceHeight = Dimensions.get('window').height;
export default () => {
	const theme = {
		flex: 1,
		height: Platform.OS === Metrics.PLATFORM.IOS ? deviceHeight : deviceHeight - 20,
		backgroundColor: Themes.COLORS.white,
	};

	return theme;
};
