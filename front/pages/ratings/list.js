var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Pagination = require('../../components/pagination');
var Rating = require('../../resources/rating');

var RatingsListPage = React.createClass({
	getInitialState: function () {
		return {
			ratings: [],

			totalCount: 0,
			limit: 10,
			offset: 0
		};
	},
	_queryRatings: function () {
		var context = this;
		Rating.query({limit: this.state.limit, offset: this.state.offset}).then(function (response) {
			context.setState({ratings: response.data, totalCount: response.totalCount});
		});
	},
	render: function () {
		return (
			<div>

				<Link to="new-rating">Create rating</Link>


				<div className="text-center">
					<Pagination limit={this.state.limit} offset={this.state.offset} totalCount={this.state.totalCount} onPageChange={this._onPageChange} />
				</div>

				{this.state.ratings}

				<div className="text-center">
					<Pagination limit={this.state.limit} offset={this.state.offset} totalCount={this.state.totalCount} onPageChange={this._onPageChange} />
				</div>
			</div>
		)

	}
});

module.exports = RatingsListPage;
