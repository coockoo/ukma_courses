var React = require('react');
var State = React.State;
var _ = require('lodash');

var PaginationItem = require('./item');

var Pagination = React.createClass({
	mixins: [State],
	getInitialState: function () {
		return {
			pages: []
		}
	},
	_onPageClick: function (page) {
		var offset = page * this.props.limit;
		this.props.onPageChange(this.props.limit, offset);
	},
	_onPrevClicked: function (e) {
		e.preventDefault();
		if (this.props.offset >= this.props.limit) {
			this.props.onPageChange(this.props.limit, this.props.offset - this.props.limit);
		}
	},
	_onNextClicked: function (e) {
		e.preventDefault();
		if (this.props.offset + this.props.limit <= this.props.totalCount) {
			this.props.onPageChange(this.props.limit, this.props.offset + this.props.limit);
		}
	},
	render: function () {
		var context = this;
		var limit = this.props.limit;
		var offset = this.props.offset;
		var total = this.props.totalCount;
		var count = Math.ceil(total / limit);
		var current = Math.floor(offset/limit);
		var pages = _.map(_.range(0, count), function (page) {
			return (
				<PaginationItem key={page} page={page} current={current} onClick={context._onPageClick}/>
			);
		});
		return (
			<nav>
				<ul className="pagination">
					<li className={count == 0 || current == 0?'disabled':''}><a href="javascript:void(0);" onClick={this._onPrevClicked}><span>&laquo;</span></a></li>
					{pages}
					<li className={count == 0 || current == count - 1?'disabled':''}><a href="javascript:void(0);" onClick={this._onNextClicked}><span>&raquo;</span></a></li>
				</ul>
			</nav>
		);
	}
});

module.exports = Pagination;