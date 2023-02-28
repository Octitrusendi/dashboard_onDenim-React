import React from 'react';
 
function Footer(){
	const today = new Date();
	const year = today.getFullYear();
    return (
        <React.Fragment>
			<footer className="sticky-footer bg-white">
				<div className="container my-auto">
					<div className="copyright text-center my-auto">
						<span>Copyright &copy; Dashboard OnDenim {year}</span>
					</div>
				</div>
			</footer>

        </React.Fragment>
    )
}

export default Footer;