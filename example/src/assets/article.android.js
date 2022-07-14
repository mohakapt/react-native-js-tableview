import * as React from 'react';
import { Path, Svg } from 'react-native-svg';

export default props => (
	<Svg viewBox='0 0 24 24' height='24' width='24' {...props}>
		<Path
			d='M6,2 C4.9,2 4.01,2.9 4.01,4 L4,20 C4,21.1 4.89,22 5.99,22 L18,22 C19.1,22 20,21.1 20,20 L20,8 L14,2 L6,2 Z M13,9 L13,3.5 L18.5,9 L13,9 Z'
			fill={props.tintColor}
		/>
	</Svg>
);
