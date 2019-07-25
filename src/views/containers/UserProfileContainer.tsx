import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux/store';
import { Card, Row} from 'react-bootstrap';
import { modeOperations } from '../../redux/ModeController';
import { ScreenTypes } from '../../redux/ModeController/constants';

class UserProfileContainer extends React.Component<ReduxType> {
	backButtonHandler = (e: React.MouseEvent) => {
		this.props.changeAppMode(ScreenTypes.DASHBOARD_MODE);
	};
	render() {
		return (
			<Row className="justify-content-md-center" data-test="component-settings">
				<Card bg="light" style={{ width: '60rem' }}>
					<Card.Body>
                        Reset Password
					</Card.Body>
				</Card>
                <Card bg="light" style={{ width: '60rem' }}>
					<Card.Body>
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
		changeAppMode: (mode: ScreenTypes) => dispatch(modeOperations.changeMode(mode))
	};
};
type ReduxType = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserProfileContainer);
