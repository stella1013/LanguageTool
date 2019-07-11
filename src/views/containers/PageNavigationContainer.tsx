import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux/store';
import { Button } from 'react-bootstrap';
import { pagelistOperations } from '../../redux/PageList';


class PageNavigationContainer extends React.Component<ReduxType> {
	pageNavHandler = (e: React.MouseEvent, id:string) => {
		let currentPage = this.props.pagecontrol;
		if(id === 'backPage'){
			this.props.decrementPage(currentPage);
		} else {
			this.props.incrementPage(currentPage);
		}
		console.log(currentPage);
	};
	render() {
		return (
			<div className="text-center">
				<p>&nbsp;</p>
				<Button
					onClick={(e: React.MouseEvent) => this.pageNavHandler(e, 'backPage')}
					data-test="loadform-button"
				>
					Back
				</Button>&nbsp;
				<Button
					onClick={(e: React.MouseEvent) => this.pageNavHandler(e, 'nextPage')}
					data-test="modaltoggle-button"
				>
					Next
				</Button>
				
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
		incrementPage: (currentPage:number) => dispatch(pagelistOperations.incrementPage(currentPage)),
		decrementPage: (currentPage:number) => dispatch(pagelistOperations.decrementPage(currentPage))
	};
};
type ReduxType = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PageNavigationContainer);
