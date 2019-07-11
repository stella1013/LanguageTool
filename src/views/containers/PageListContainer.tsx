import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux/store';
import Form from './FormContainer';
import PageComponent from '../components/PageComponent';
import PageNavigationContainer from './PageNavigationContainer';


interface PageState{
	pages:[]
}
class PageListContainer extends React.Component<any, PageState> {
	constructor(props:any){
		super(props);
		this.state = {
			pages:[]
		}
	}
	componentDidMount(){
		this.setState({pages:this.props.data});
	}
	
	render() {
		
		let pages: any = null;
		if (this.state.pages.length > 0) {
			
			pages = (
				<div>
					{this.state.pages.map((singlePage: any, index: any) => {
						return (

								index === this.props.pagecontrol ? <PageComponent key={index} id={index+1} data-test="component-page" >
								<Form
									formScaffold={singlePage.page}
									//changed={this.props.changed}
								/>
							</PageComponent>
							: null
						);
					})}
				</div>
			);
		}
		return (
			<div className="PageListContainer" data-test="component-pagelist">
				{pages}
				<PageNavigationContainer/>
			</div>
			
		);
	}
}

const mapStateToProps = (state: AppState) => {
	return {
		data: state.data.pages,
		pagecontrol: state.pagelist.currentPage
	};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		//showModal: (showModal:boolean) => dispatch(modalOperations.showModal(showModal))
	};
};
type ReduxType = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PageListContainer);
