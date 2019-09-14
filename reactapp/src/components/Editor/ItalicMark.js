import React from 'react'

const ItalicMark = props => (
	<em property="italic" style={{fontSize:28}}>
		{props.children}
	</em>
);

export default ItalicMark;
