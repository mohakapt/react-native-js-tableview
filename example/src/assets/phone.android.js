import React from 'react';
import { Path, Svg } from 'react-native-svg';

export default props => (
	<Svg viewBox='0 0 24 24' height='24' width='24' {...props}>
		<Path
			d='M6.62,10.79 C8.06,13.62 10.38,15.93 13.21,17.38 L15.41,15.18 C15.68,14.91 16.08,14.82 16.43,14.94 C17.55,15.31 18.76,15.51 20,15.51 C20.55,15.51 21,15.96 21,16.51 L21,20 C21,20.55 20.55,21 20,21 C10.61,21 3,13.39 3,4 C3,3.45 3.45,3 4,3 L7.5,3 C8.05,3 8.5,3.45 8.5,4 C8.5,5.25 8.7,6.45 9.07,7.57 C9.18,7.92 9.1,8.31 8.82,8.59 L6.62,10.79 Z'
			fill={props.tintColor}
		/>
	</Svg>
);
