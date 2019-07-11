import * as React from 'react';

const Loading = (props: any) => {
return (
<div className="loading">
	<p className="subheader-txt">
		Just a moment while we load...
	</p>
	<div className="lds-default"><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/></div>
</div>

);
};
export default Loading;
