var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;

var Pagination = require('../../components/pagination');
var Rating = require('../../resources/rating');
var RatingsList = require('../../components/ratings/list');

var RatingsListPage = React.createClass({
	getInitialState: function () {
		return {
			ratings: [],

			totalCount: 0,
			limit: 10,
			offset: 0
		};
	},
	componentDidMount: function () {
		this._queryRatings();
	},
	_queryRatings: function () {
		var context = this;
		Rating.query({limit: this.state.limit, offset: this.state.offset}).then(function (response) {
			context.setState({ratings: response.data, totalCount: response.totalCount});
		});
	},
	render: function () {
		return (
			<div className="row">
				<div className="col-md-8 col-md-offset-2">

					<Link to="new-rating">Create rating</Link>

					<div className="text-center">
						<Pagination limit={this.state.limit} offset={this.state.offset} totalCount={this.state.totalCount} onPageChange={this._onPageChange} />
					</div>

					<RatingsList ratings={this.state.ratings}/>

					<div className="text-center">
						<Pagination limit={this.state.limit} offset={this.state.offset} totalCount={this.state.totalCount} onPageChange={this._onPageChange} />
					</div>

				</div>
			</div>
		)

	}
});

module.exports = RatingsListPage;
