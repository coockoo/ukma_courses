var React = require('react');

var CommentForm = React.createClass({
	_onSubmit: function (e) {
		e.preventDefault();
		this.props.onSubmit(this.state);
		this._clearForm();
	},
	_clearForm: function () {
		this.setState({
			title: '',
			content: ''
		});
	},
	getInitialState: function () {
		return {
			title: '',
			content: ''
		}
	},
	_onChange: function (e) {
		var changed = {};
		changed[e.target.name] = e.target.value;
		this.setState(changed);
	},
	render: function () {
		return (
			<form onSubmit={this._onSubmit}>
				<div className='form-group'>
					<label htmlFor="title">Title</label>
					<input type="text" id="title" name="title" className="form-control" value={this.state.title} onChange={this._onChange}/>
				</div>
				<div className="form-group">
					<label htmlFor="content">Content</label>
					<textarea id="content" name="content" className="form-control" value={this.state.content} onChange={this._onChange} rows="5"></textarea>
				</div>
				<div className="form-group text-right">
					<input type="submit" value="Post" className="btn btn-primary"/>
				</div>
			</form>
		);
	}
});

module.exports = CommentForm;