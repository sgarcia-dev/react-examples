import React from 'react';

class Navbar extends React.Component {
	render() {
		return <nav className="navbar navbar-inverse navbar-fixed-top no-margin">
			<div className="container-fluid">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="#">React Notekeeper</a>
				</div>

				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
					<ul className="nav navbar-nav">
						<li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
						<li><a href="#">Link</a></li>
					</ul>
					<ul className="nav navbar-nav navbar-right">
						<li><a href="#">Link</a></li>
					</ul>
				</div>
			</div>
		</nav>
	}
}

export default Navbar;