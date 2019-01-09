import React from 'react';

// pure function no states
const Navigation = () => {
	return (
		<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
			<p className='f3 underline link dim black pa3 pointer'>Sign Out</p>
		</nav>
	);
};

export default Navigation;