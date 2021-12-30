import styled from '@emotion/styled';

const ContainerQuote = styled.article`
	font-size: clamp(2rem, 1rem + 3vw, 3rem);
	position: relative;
	margin-bottom: 5rem;
	padding-left: 3rem;
	/* word-break: break-all; */
	@media (min-width: 480px) {
		padding-left: 5rem;
	}
	@media (min-width: 768px) {
		padding-left: 8rem;
	}
	&::before {
		content: '';
		position: absolute;
		left: 0;
		width: 0.8rem;
		height: 100%;
		background-color: #f7df94;
	}
`;
interface QuoteProps {
	text: string;
}
export const Quote = ({ text }: QuoteProps) => {
	return (
		<ContainerQuote>
			<p>"{text}"</p>
		</ContainerQuote>
	);
};
