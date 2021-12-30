import styled from '@emotion/styled';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { BtnRandom } from '../components/BtnRandom';
import { useEffect, useState } from 'react';
const ContainerMain = styled.main`
	width: 95%;
	max-width: 100rem;
	margin: 0 auto 3rem auto;
`;

const Container = styled.section`
	background-color: #fff;
	padding: 2rem;
	margin-bottom: 5rem;
	box-shadow: 0px 2px 5px 3px #33333333;
	border-radius: 1rem;
`;

const Footer = styled.footer`
	font-size: 1.6rem;
	color: #f2f2f2;
	text-align: center;
	padding-bottom: 3rem;
	a {
		color: #f2f2f2;
		text-decoration: none;
	}
`;
export const QuotePage = () => {
	const [btnActive, setBtnActive] = useState<boolean>(false);
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (location.pathname === '/') navigate('/random', { replace: true });
	}, []);

	return (
		<>
			<ContainerMain>
				<h1>Random Quote Generator</h1>
				<Container>
					<BtnRandom setBtnActive={setBtnActive} />
					<Outlet context={{ btnActive, setBtnActive }} />
				</Container>
			</ContainerMain>
			<Footer>
				Created by <b>OmarUriel8</b> -{' '}
				<a href="https://devchallenges.io/" target="_blank" rel="noopener noreferrer">
					devChallenges.io
				</a>
			</Footer>
		</>
	);
};
