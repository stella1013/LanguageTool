import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux/store';
// import { pagelistOperations } from '../../redux/PageList';
import { ProgressBar, Card } from 'react-bootstrap';

class ProgressBarContainer extends React.Component<ReduxType> {
	
	
	render() {
		return (
			<div data-test="component-progressbar">
				<Card bg="light">
					<Card.Body>
						<Card.Subtitle>Progress: {this.props.progressBar}%</Card.Subtitle>
						<hr/>
						<ProgressBar animated now={this.props.progressBar} />
					</Card.Body>
				</Card>
			</div>
		);
	}
}

const mapStateToProps = (state: AppState) => {
	return {
		progressBar:state.progressBar
	};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		//incrementPage: (currentPage:number) => dispatch(pagelistOperations.incrementPage(currentPage)),
		//decrementPage: (currentPage:number) => dispatch(pagelistOperations.decrementPage(currentPage))
	};
};
type ReduxType = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProgressBarContainer);