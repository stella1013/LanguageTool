import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux/store';
import { modalOperations } from '../../redux/Modal';
import { Modal, Button } from 'react-bootstrap';


class ModalContainer extends React.Component<ReduxType> {
	modalHandler = ()=>{
        if(!this.props.isModalOpen){
            this.props.showModal(true);
        }else{
            this.props.showModal(false);
        }
    }
	render() {
		return (
			<div data-test="component-modal">
				<Modal show={this.props.isModalOpen} onHide={():void=>this.modalHandler()}>
					<Modal.Header closeButton>
						<Modal.Title>General File Upload Guidelines</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<h5>The specifications for file uploads are:</h5>
						<ul>
							<li>up to 10MB in size</li>
							<li>
								the file name can only have the following characters: a-z A-Z
								0-9 _ . -
							</li>
							<li> the file name can be no longer than 512 characters</li>
							<li>the file name can only have a single '.'</li>
						</ul>
						<h5>Image Specifications:</h5>
						<ul>
							<li>jpeg/jpg or png formats allowed</li>
							<li>Maximum image dimensions 2048px width and 2048px height</li>
							<li>72dpi</li>
						</ul>
						<h5>Video Specifications:</h5>
						<ul>
							<li>mpeg/mpg format allowed</li>
							<li>up to 50MB in size</li>
							<li>Maximum image dimensions 2048px width and 2048px height</li>
							<li>72dpi</li>
						</ul>
					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary" onClick={this.modalHandler}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
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
		showModal: (showModal:boolean) => dispatch(modalOperations.showModal(showModal))
	};
};
type ReduxType = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ModalContainer);
