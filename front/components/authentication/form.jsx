var AuthenticationForm = React.createClass({
	render: function () {
		return (
			<form>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input type="text" id="email" name="email" className="form-control"/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" name="password" className="form-control"/>
				</div>
				<div className="form-group text-right">
					<input type="submit" value="Sign in" className="btn btn-xs btn-primary"/>
					<span> or <a href="#/registration">create account</a></span>
				</div>
			</form>
		);
	}
});

//React.render(<AuthenticationForm />, document.getElementById('container'));