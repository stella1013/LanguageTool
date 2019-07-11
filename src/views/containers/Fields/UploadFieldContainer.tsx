import * as React from 'react';

interface LocalState {
	menuState: string;
	menuShadow: string;
	optionSelected: { value: string; displayValue: string };
}
class UploadFieldContainer extends React.Component<any, LocalState> {
	constructor(props: any) {
		super(props);

		this.state = {
			menuState: 'menuOpen',
			menuShadow: 'menuShadowOff',
			optionSelected: {
				value: this.props.value,
				displayValue: this.props.displayValue
			}
		};
	}
	componentDidUpdate(prevProps:any) {
		if(prevProps.displayValue !== this.props.displayValue) {
			this.setState({
				optionSelected: {
				value: this.props.value,
				displayValue: this.props.displayValue
			}
		});

		}
	}

	selectHandler(e: any, obje: { value: any; displayValue: string }) {
		// e.preventDefault();

		const newValue = obje;
		// console.log(this.props);
		// console.log(newValue);
		this.setState({
			optionSelected: newValue
		});
		const { onChange } = this.props;
		onChange(e, this.props.id, newValue);

	}
	handleChange = (e: any) => {
		const { onChange } = this.props;
		onChange(e, this.props.ident, this.state.optionSelected);
	}
	selectToggle = () => {
		if (this.state.menuState === 'menuClosed') {
			this.setState({ menuState: 'menuOpen', menuShadow: 'menuShadowOn' });
		} else {
			this.setState({ menuState: 'menuClosed', menuShadow: 'menuShadowOff' });
		}
	}

	render() {
		return (
			<div>
			    <input type="file" className="form-control-file" accept="image/png, image/jpeg" name="logo" />
                            <p>Accepted File Types are {this.props.fileType}</p>
            </div>
		);
	}
}

export default UploadFieldContainer;
