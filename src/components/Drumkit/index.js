import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import InstrumentBitsList from '../InstrumentBitsList';
import InstrumentInfos from '../InstrumentInfos';
import CurrentBit from '../CurrentBit';
import AutoScroll from '../AutoScroll';

const s = {
	container: {
		display: 'flex',
		position: 'relative'
	},
	instruments: {
		width: '1000px',
		overflowX: 'hidden',
		overflowY: 'hidden',
		position: 'relative'
	}	
};

const timeWidth = 6200;

class DrumKit extends React.Component {
	componentDidMount() {
		this.props.dispatch(actions.initDrumkit({id: 0}));
	}

	static getBitsOffset() {
		const el = document.getElementById('rightPanel');
		return el && el.offsetLeft;
	}  

	render() {
		const timeStyle = {
			width: timeWidth
		};
 
		return (
			<div style={s.container}>
				<InstrumentInfos />
				<div style={s.instruments} id='rightPanel'>
					<AutoScroll />
					<div style={timeStyle}>
						<CurrentBit timeWidth={timeWidth} />
						<InstrumentBitsList timeWidth={timeWidth} />
					</div>
				</div>
			</div>
		);
	}
}

export default connect()(DrumKit);