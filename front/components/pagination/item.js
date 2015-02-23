var React = require('react');

var PaginationItem = React.createClass({
	_onClick: function (e) {
		e.preventDefault();
		this.props.onClick(this.props.page);
	},
	render: function () {
		var className = (this.props.page == this.props.current)?'active':'';
		return (
			<li className={className}><a href="javascript:void(0);" onClick={this._onClick}>{this.props.page + 1}</a></li>
		);
	}
});

module.exports = PaginationItem;
