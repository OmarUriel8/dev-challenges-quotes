import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

interface QuoteInfoProps {
	quoteAuthor: string;
	quoteGenre: string;
}
const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;
	transition: background-color 0.3s ease-out, color 0.3s ease-out;
	padding: 3rem;
	margin-bottom: 3rem;
	&:hover {
		cursor: pointer;
		background-color: #333333;
	}
	&:hover .author {
		color: #fff;
	}
`;
const Author = styled.h2`
	font-size: 2.4rem;
	color: #4f4f4f;
	margin: 0;
`;
const Genre = styled.p`
	font-size: 1.4rem;
	color: #828282;
	margin: 0;
`;
const Icon = styled.span`
	color: #fff;
`;
export const QuoteInfo = ({ quoteAuthor, quoteGenre }: QuoteInfoProps) => {
	const navigate = useNavigate();
	return (
		<Container onClick={() => navigate(`../author/${quoteAuthor}`)}>
			<div>
				<Author className="author">{quoteAuthor}</Author>
				<Genre>{quoteGenre}</Genre>
			</div>
			<Icon className="material-icons-outlined">trending_flat</Icon>
		</Container>
	);
};
