import React from 'react';

class AppTitleContainer extends React.Component<any, {}> {
	render() {
		return <div data-test="component-apptitle"><h2>{this.props.title}</h2></div>;
	}
}

export default AppTitleContainer;
