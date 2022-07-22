import React, { useState } from 'react';
import { FaRProject, FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
} from './Navbar.styles.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { data } from '../../data/Navbar.data.js';

const Navbar = () => {
    //for mobile menu
	const [show, setShow] = useState(false);

	let navigate = useNavigate();
	let location = useLocation();

	//clicking on mobile menu
    const handleClick = () => {
		setShow(!show);
	};

	//scroll to specific section on landing page
    const scrollTo = (id) => {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

	//close mobile menu
    const closeMobileMenu = (to, id) => {
		if (id && location.pathname === '/') {
			scrollTo(id);
		}

		navigate(to);
		setShow(false);
	};

	return (
		<IconContext.Provider value={{ color: '#AB0810' }}>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						<NavIcon src="./assets/logo.png" alt="logo" />
						WithLove
					</NavLogo>
					<MobileIcon onClick={handleClick}>
						{show ? <FaTimes /> : <CgMenuRight />}
					</MobileIcon>
					<NavMenu show={show}>
						{data.map((el, index) => (
							<NavItem key={index}>
								<NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
									{el.text}
								</NavLinks>
							</NavItem>
						))}
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;