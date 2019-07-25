import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux/store';
import { Button, Form } from 'react-bootstrap';
import { pagelistOperations } from '../../redux/PageList';

class DocumentContainer extends React.Component<ReduxType> {
	pageNavHandler = (e: React.MouseEvent, id: string) => {
		let currentPage = this.props.pagecontrol;
		if (id === 'backPage') {
			this.props.decrementPage(currentPage);
		} else {
			this.props.incrementPage(currentPage);
		}
		console.log(currentPage);
	};
	render() {
		return (
			<div className="text-center">
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Control  as="textarea" rows="30"/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}
const mapStateToProps = (state: AppState) => {
	return {
		pagecontrol: state.pagelist.currentPage
	};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		incrementPage: (currentPage: number) =>
			dispatch(pagelistOperations.incrementPage(currentPage)),
		decrementPage: (currentPage: number) =>
			dispatch(pagelistOperations.decrementPage(currentPage))
	};
};
type ReduxType = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DocumentContainer);
