import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux/store';
import { Card, Row, Button } from 'react-bootstrap';
import AppTitleContainer from './AppTitleContainer';
import ProgressBarContainer from './ProgressBarContainer';
import PageListContainer from './PageListContainer';
import { modeOperations } from '../../redux/ModeController';
import { ScreenTypes } from '../../redux/ModeController/constants';

class EditorContainer extends React.Component<ReduxType> {
	backButtonHandler = (e: React.MouseEvent) => {
		this.props.changeAppMode(ScreenTypes.DASHBOARD_MODE);
	};
	render() {
		return (
			<Row className="justify-content-md-center" data-test="component-editor">
				<Card bg="light" style={{ width: '60rem' }}>
					<Card.Body>
					<Card.Header><div className="row">
							<div className="col-3-of-4"><AppTitleContainer title={this.props.title} data-test="apptitle" /></div>
							<div className="col-1-of-4"><Button variant="light"
							onClick={(e: React.MouseEvent) => this.backButtonHandler(e)}
							data-test="loadform-button"
						>
							Main Menu
						</Button></div>
						</div></Card.Header>
						
						
						
						<ProgressBarContainer />
						<PageListContainer />
					</Card.Body>
				</Card>
			</Row>
		);
	}
}
const mapStateToProps = (state: AppState) => {
	return {
		title: state.appTitle.appTitle
	};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		changeAppMode: (mode: ScreenTypes) =>
			dispatch(modeOperations.changeMode(mode))
		//showModal: (showModal:boolean) => dispatch(modalOperations.showModal(showModal))
	};
};
type ReduxType = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditorContainer);
