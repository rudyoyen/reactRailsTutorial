var Item = React.createClass({
	getInitialState() {
		return {editable: false};
	},
	handleEdit () {
		if (this.state.editable) {
			this.props.handleUpdate({
				id: this.props.item.id,
				name: this.refs.name.value,
				description: this.refs.description.value
			});
		}
		this.setState({editable: !this.state.editable});
	},
	render () {
		var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>;
		var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.item.description} /> : <p>{this.props.item.description}</p>;
		return (
			<div>
				{name}
				{description}
				<button onClick={this.props.handleDelete}>Delete</button>
				<button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit'}</button>
			</div>
		)
	}
});