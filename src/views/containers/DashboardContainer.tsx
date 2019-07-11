import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux/store';
import { Button, Card, Row } from 'react-bootstrap';
import ModalContainer from './ModalContainer';
import AppTitleContainer from './AppTitleContainer';
import { modalOperations } from '../../redux/Modal';
import { modeOperations } from '../../redux/ModeController';
import { ScreenTypes } from '../../redux/ModeController/constants';


class DashboardContainer extends React.Component<ReduxType> {
    modalHandler = (e:React.MouseEvent)=>{
        if(!this.props.isModalOpen){
            this.props.showModal(true);
        }else{
            this.props.showModal(false);
        }
	}
	getStartedHandler = (e:React.MouseEvent) =>{
		this.props.changeAppMode(ScreenTypes.EDIT_MODE);
	}
	
	render() {
		return (

				<Row className="justify-content-md-center" data-test="component-dashboard">
					<Card bg="light" className="text-center" style={{ width: '60rem' , height: '40rem'}}>
					
						<Card.Body>
						<Card.Img variant="top" src="fcs-logo.jpg" style={{ width: '20rem', margin:'0 auto'}}/>
						<AppTitleContainer title={this.props.title} data-test="apptitle"/>
						<Card.Subtitle className="mb-2 text-muted">Upload files and insert information here.</Card.Subtitle>
						<p>&nbsp;</p>
						<p>This is where you can upload files and insert information you would like to have displayed on your tablet. If you need help with uploading or inserting your assets, please contact our technical support. Also please take a look at our more detailed specifications for pdf, image and video formats.</p>
						<Button variant="primary" onClick={(e:React.MouseEvent)=>this.modalHandler(e)} data-test="modaltoggle-button">
						View Detailed Upload Specs
						</Button>&nbsp;
                        <Button onClick={(e:React.MouseEvent)=>this.getStartedHandler(e)} data-test="loadform-button">
						Get Started
						</Button>
						</Card.Body>
					</Card>
					<ModalContainer  data-test="modalDisplay"/>
				</Row>
			
			
		);
	}
}
const mapStateToProps = (state:AppState) => {
	return {
		title:state.appTitle.appTitle,
		isModalOpen:state.modal.showModal,
		modeController:state.modeController.currentMode
	};
};
const mapDispatchToProps = (
	dispatch: any
) => {
	return {
		changeAppMode: (mode:ScreenTypes) => dispatch(modeOperations.changeMode(mode)),
		showModal: (showModal:boolean) => dispatch(modalOperations.showModal(showModal))
	};
};
type ReduxType = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DashboardContainer);
