import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
const ContainerRandom = styled.div`
	display: flex;
	font-size: 1.6rem;
	color: #4f4f4f;
	justify-content: flex-end;
	p {
		display: flex;
		column-gap: 0.5rem;
		align-items: center;
		border-bottom: 3px solid #fff;
		transition: border-color 0.3s ease-in;
		&:hover {
			cursor: pointer;
			border-color: #f7df94;
		}
		span {
			font-size: 1.8rem;
		}
	}
`;

interface RandomProps {
	setBtnActive: Function;
}
export const BtnRandom = ({ setBtnActive }: RandomProps) => {
	const location = useLocation();

	const navigate = useNavigate();

	const handleClick = () => {
		if (location.pathname.includes('random')) {
			setBtnActive(true);
		}
		navigate('/random');
	};
	return (
		<ContainerRandom>
			<p onClick={handleClick}>
				Random
				<span className="material-icons-outlined">change_circle</span>
			</p>
		</ContainerRandom>
	);
};
