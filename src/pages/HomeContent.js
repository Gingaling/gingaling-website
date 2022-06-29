import React from 'react';

export default function HomeContent(props) {

	return (
	<>
	<div id={`${props.isContrast ? "contrastStyle" : "null"}`}>
	<div id={`${props.isLtrSpacingActive ? 'LtrSpacingStyle' : 'null'}`}>
	<div id={`${props.isFontActive ? "diffStyle" : "null"}`}>
	<div className="next-steps">
		<h1
			className="my-5 text-center"
			>
			<b>
				Welcome to the<br />GA University Student Portal
			</b>
		</h1>
		<h3 className="my-5 text-center">
			<em>from this page, students can...</em>
		</h3>
		<div id="PortalParts" className="row">
			<div className="col-md-5 mb-4">
				<h4 className="mb-3">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="">
						<i className="fas fa-link mr-2" />
						Retrieve course syllabi
					</a>
				</h4>
				<p>
					Auth0 supports social providers as Facebook, Twitter, Instagram and
					100+, Enterprise providers as Microsoft Office 365, Google Apps,
					Azure, and more. You can also use any OAuth2 Authorization Server.
				</p>
			</div>

			<div className="col-md" />

			<div className="col-md-5 mb-4">
				<h4 className="mb-3">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="">
						<i className="fas fa-link mr-2" />
						Check course grades and progress
					</a>
				</h4>
				<p>
					Add an extra layer of security by enabling Multi-factor
					Authentication, requiring your users to provide more than one piece of
					identifying information. Push notifications, authenticator apps, SMS,
					and DUO Security are supported.
				</p>
			</div>
		</div>

		<div className="row">
			<div className="col-md-5 mb-4">
				<h4 className="mb-3">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="">
						<i className="fas fa-link mr-2" />
						Contact course instructors and teaching assistants
					</a>
				</h4>
				<p>
					Auth0 can detect anomalies and stop malicious attempts to access your
					application. Anomaly detection can alert you and your users of
					suspicious activity, as well as block further login attempts.
				</p>
			</div>

			<div className="col-md" />

			<div className="col-md-5 mb-4">
				<h4 className="mb-3">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="">
						<i className="fas fa-link mr-2" />
						Access resources concerning internet accessibility
					</a>
				</h4>
				<p>
					Rules are JavaScript functions that execute when a user authenticates
					to your application. They run once the authentication process is
					complete, and you can use them to customize and extend Auth0's
					capabilities.
				</p>
			</div>
		</div>
	</div>
	</div>
	</div>
	</div>
	</>
 );
}
