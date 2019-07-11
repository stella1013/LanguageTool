import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux/store';
import { Card, Row } from 'react-bootstrap';
import AppTitleContainer from './AppTitleContainer';
import ProgressBarContainer from './ProgressBarContainer';
import PageListContainer from './PageListContainer';



export class SuccessContainer extends React.Component<ReduxType> {

	render() {
		return (
			<div data-test="component-editor">
				<Row className="justify-content-md-center">
					<Card style={{ width: '60rem' }}>
						<Card.Body>
						<AppTitleContainer title={this.props.title} data-test="apptitle"/>
                        <ProgressBarContainer/>
                        <PageListContainer/>
						</Card.Body>
					</Card>
				</Row>
			</div>
			
		);
	}
}
const mapStateToProps = (state:AppState) => {
	return {
		title:state.appTitle.appTitle,
		isModalOpen:state.modal.showModal
	};
};
const mapDispatchToProps = (
	dispatch: any
) => {
	return {
		//showModal: (showModal:boolean) => dispatch(modalOperations.showModal(showModal))
	};
};
type ReduxType = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SuccessContainer);
