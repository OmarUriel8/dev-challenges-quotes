import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { fetchSinToken } from '../helpers/fetch';
import { QuoteContexActive, QuoteObject } from '../interfaces/quote';
import { Spinner } from './Spinner';
import { Quote } from './Quote';
import { QuoteInfo } from './QuoteInfo';

const Error = styled.p`
	background-color: #d32f2f;
	border-radius: 10px;
	color: #fff;
	font-weight: bold;
	padding: 2rem;
	text-align: center;
`;

const ContainerQuote = styled.section`
	max-width: 50rem;
	margin: 0 auto;
`;

export const QouteRandom = () => {
	const [loading, setLoading] = useState(false);
	const [quote, setQuote] = useState<QuoteObject>({} as QuoteObject);
	const [errorApi, setErrorApi] = useState(false);
	const { btnActive, setBtnActive } = useOutletContext<QuoteContexActive>();

	const getDataAPI = async () => {
		setLoading(true);
		try {
			const response = await fetchSinToken({ endpoint: 'random' });
			if (response?.ok) {
				setErrorApi(false);
				const result = await response.json();
				setQuote({ ...result.data[0] });
			} else {
				setErrorApi(true);
			}
		} catch (error) {
			console.log(error);
			setErrorApi(true);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (btnActive) {
			getDataAPI();
			setBtnActive(false);
		}
	}, [btnActive]);

	useEffect(() => {
		getDataAPI();
	}, []);

	return (
		<>
			{loading ? (
				<Spinner />
			) : errorApi ? (
				<Error>An error occurred, try again later.</Error>
			) : (
				<ContainerQuote>
					<Quote text={quote.quoteText} />
					<QuoteInfo quoteAuthor={quote.quoteAuthor} quoteGenre={quote.quoteGenre} />
				</ContainerQuote>
			)}
		</>
	);
};
