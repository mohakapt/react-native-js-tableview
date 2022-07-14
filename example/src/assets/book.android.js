import * as React from 'react';
import { Path, Svg } from 'react-native-svg';

export default props => (
	<Svg viewBox='0 0 24 24' height='24' width='24' {...props}>
		<Path
			d='M18,2 L6,2 C4.9,2 4,2.9 4,4 L4,20 C4,21.1 4.9,22 6,22 L18,22 C19.1,22 20,21.1 20,20 L20,4 C20,2.9 19.1,2 18,2 Z M6,4 L11,4 L11,12 L8.5,10.5 L6,12 L6,4 Z'
			fill={props.tintColor}
		/>
	</Svg>
);
