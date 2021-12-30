import styled from '@emotion/styled';

const Loading = styled.div`
	margin: 1rem auto;
	&.lds-hourglass {
		display: block;
		position: relative;

		width: 80px;
		height: 80px;
	}
	&.lds-hourglass:after {
		content: ' ';
		display: block;
		border-radius: 50%;
		width: 0;
		height: 0;
		margin: 8px;
		box-sizing: border-box;
		border: 32px solid #f7df94;
		border-color: #f7df94 transparent #f7df94 transparent;
		animation: lds-hourglass 1.2s infinite;
	}
	@keyframes lds-hourglass {
		0% {
			transform: rotate(0);
			animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
		}
		50% {
			transform: rotate(900deg);
			animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		}
		100% {
			transform: rotate(1800deg);
		}
	}
`;
export const Spinner = () => {
	return <Loading className="lds-hourglass"></Loading>;
};
