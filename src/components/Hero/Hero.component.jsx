import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading, MainHeadingV2 } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './Hero.styles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero.mp4" autoPlay muted />
			<Container>
				<MainHeadingV2>Cinthia's Cakes, Sweets & Catering</MainHeadingV2>
				<HeroText>
					Homemade with love 
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>Get Started</Button>
					</Link>
					<HeroButton>Find More</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;