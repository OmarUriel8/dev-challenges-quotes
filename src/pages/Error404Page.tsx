import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
	background-color: #fff;
	border-radius: 6px;
	box-shadow: 0px 2px 3px 0px #33333333;
	color: #000;
	border: none;
	font-size: 1.6rem;
	padding: 0.8rem 1.6rem;
	cursor: pointer;
	padding: 0.8rem 1.6rem;
	border-left: 5px solid #fff;
	border-right: 5px solid #fff;
	transition: border-color 0.3s ease;
	&:hover {
		cursor: pointer;
		border-color: #f7df94;
		/* color: #f7df94; */
	}
`;

const Main = styled.main`
	max-width: 120rem;
	width: 90%;
	margin: 0 auto;
`;

export const Error404Page = () => {
	return (
		<Main>
			<h1>Página no encontrada</h1>
			<Button className="text-primary" to="/random">
				Ir a la página principal
			</Button>
		</Main>
	);
};
