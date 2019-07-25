import * as React from 'react';
import {Form } from 'react-bootstrap';

interface LocalState {
	showInput: boolean;
}
class BSInputFieldContainer extends React.Component<any, LocalState> {
	constructor(props: any) {
		super(props);

		this.state = {
			showInput: false
		};
	}
	static getDerivedStateFromProps: React.GetDerivedStateFromProps<
		any,
		LocalState
	> = (props, state) => {
		if (props.showInput !== state.showInput) {
			return {
				showInput: props.showInput
			};
		}
		return null;
	};
	inputVisibleToggle = (e: React.MouseEvent) => {
		if (this.state.showInput === false) {
			this.setState({ showInput: true });
		}
	};

	render() {
		return (
			<Form.Group controlId={this.props.elementName}>
				<Form.Label>{this.props.label}</Form.Label>
				<Form.Control
					type={this.props.type}
					placeholder={this.props.placeholder}
					value={this.props.value}
					onChange={this.props.changed}
                    id={this.props.id}
                    multiple
				/>
				<Form.Text className="text-muted">
					{this.props.desc}
				</Form.Text>
			</Form.Group>
		);
	}
}

export default BSInputFieldContainer;
