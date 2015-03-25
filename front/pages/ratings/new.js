var React = require('react');
var Router = require('react-router');

var RatingForm = require('../../components/ratings/form');

var Rating = require('../../resources/rating');

var NewRatingPage = React.createClass({
	mixins: [Router.Navigation],
	_createRating: function (rating) {
		var context = this;
		Rating.create(rating).then(function (data) {
			context.transitionTo('ratings');
		});
	},
	render: function () {
		//TODO: maybe do this with popup (only name)
		return (
			<div className="row">
				<div className="col-xs-8 col-xs-offset-2">
					<RatingForm onSubmit={this._createRating}/>
				</div>
			</div>
		);
	}
});

module.exports = NewRatingPage;
