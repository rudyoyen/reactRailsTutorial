var Body = React.createClass({
	getInitialState () {
		return { items: [] };
	},

	componentDidMount() {
		$.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
	},

	handleSubmit(item) {
		var newState = this.state.items.concat(item);
		this.setState({ items: newState });
	},

	removeItemClient (id) {
		var newItems = this.state.items.filter((item) => {
			return item.id != id;
		});
		this.setState({ items: newItems });
	},

	handleDelete(id) {
		console.log("calling delete for id: ", id)
		$.ajax({
			url: `/api/v1/items/${id}`,
			type: 'DELETE',
			success: (response) => {
				console.log('deleted item', response);
				this.removeItemClient(id);
			}
		});
	},

	handleUpdate (item) {
		$.ajax({
			url: `api/v1/items/${item.id}`,
			type: 'PUT',
			data: { item: item},
			success: (response) => {
				console.log('edited item', response);
				this.updateItems(item);
			}
		});
	},

	updateItems (item) {
		var items = this.state.items.filter((i) => { return i.id != item.id });
		items.push(item);
		this.setState({items: items});
	},

	render () {
		return (
			<div>
				<NewItem handleSubmit={this.handleSubmit}/>
				<AllItems items={this.state.items} handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
			</div>
		)
	}
});