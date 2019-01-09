import React from 'react';
import './ImageLinkForm.css';

// pure function no states
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className="f3">
				{'This app can detect faces in your pictures. Try it out.'}
			</p>
			<div className="center">
				<div className="form center pa4 br3 shadow-5">
					<input onChange={onInputChange} className="f4 pa2 w-70 center" type="text" />
					<button 
					className="f4 ph3 w-30 grow link pv2 dib white bg-light-purple"
					onClick={onButtonSubmit}
					>Detect</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;