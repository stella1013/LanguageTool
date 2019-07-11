import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux/store';
import { Container, Navbar } from 'react-bootstrap';
import { dataOperations } from '../../redux/Data';
import DashboardContainer from './DashboardContainer';
import EditorContainer from './EditorContainer';
import PreviewContainer from './PreviewContainer';
import SuccessContainer from './SuccessContainer';
import { modalOperations } from '../../redux/Modal';
import { appTitleOperations, appTitleSelectors } from '../../redux/AppTitle';
import { ScreenTypes } from '../../redux/ModeController/constants';
import AuthContainer from './Auth/AuthContainer';
import UserProfileContainer from './UserProfileContainer';
import { modeOperations } from '../../redux/ModeController';

/*
TODO:Add the following reducers
	isReady: false,?
	currentPage: 0,
	totalPages: 999999,
	pages: [],
	selected/inputed data object?
*/
class App extends React.Component<ReduxType> {
	currentMode: any;
	constructor(props:any){
		super(props);
		this.props.getData();
		this.props.setAppTitle('Asset Ingesting Application');
	}
	componentDidMount = () => {
		
	};
	showUserProfile = (e:any) =>{
		this.props.changeAppMode(ScreenTypes.USERPROFILE_MODE);
	}
	getCurrentMode = (mode: ScreenTypes) => {
		if(this.props.isAuth === true){
			if (mode === ScreenTypes.EDIT_MODE) {
				this.currentMode = <EditorContainer data-test="dashboard-mode"/>;
			} else if (mode === ScreenTypes.PREVIEW_MODE) {
				this.currentMode = <PreviewContainer />;
			} else if (mode === ScreenTypes.SUCCESS_MODE) {
				this.currentMode = <SuccessContainer />;
			} else if (mode === ScreenTypes.USERPROFILE_MODE) {
				this.currentMode = <UserProfileContainer />;
			} else {
				this.currentMode = <DashboardContainer />;
			}
		} else {
			this.currentMode = <AuthContainer/>;
		}
		return this.currentMode;
	};

	render() {
		return (
			<div>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">
				{this.props.isAuth ? ' User Name' : this.props.appTitle}
				</Navbar.Brand>
				<Navbar.Collapse className="justify-content-end">
					<Navbar.Text>
					{this.props.isAuth ? ( <div>You are logged In:&nbsp; <button onClick={(e:React.MouseEvent)=>this.showUserProfile(e)}>Settings</button></div> )
					: <a href="#login">Log In</a> }
					</Navbar.Text>
				</Navbar.Collapse>
				
			</Navbar>
			<Container data-test="component-app" >
				{this.getCurrentMode(this.props.modeController)}
			</Container>
			</div>
		);
	}
}
const mapStateToProps = (state: AppState) => {
	return {
		data: state.data.pages,
		modeController: state.modeController.currentMode,
		isAuth: state.appAuth.isAuth,
		appTitle: appTitleSelectors.getAppTitleSelectorMemo(state)
	};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		getData: () => dispatch(dataOperations.fetchData()),
		showModal: (showModal: boolean) => dispatch(modalOperations.showModal(showModal)),
		setAppTitle: (title: string) => dispatch(appTitleOperations.setAppTitle(title)),
		changeAppMode: (newMode:ScreenTypes) => dispatch(modeOperations.changeMode(newMode))
	};
};
type ReduxType = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;
export default connect( mapStateToProps, mapDispatchToProps)(App);
