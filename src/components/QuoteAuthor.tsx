import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { fetchSinToken } from '../helpers/fetch';
import { QuoteContexActive, QuoteObject } from '../interfaces/quote';
import { Spinner } from './Spinner';
import { Quote } from './Quote';
import { BtnRandom } from './BtnRandom';

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

const Info = styled.div`
	padding: 2rem;
	font-size: 2rem;
	border-radius: 10px;
	background-color: #80df80;
	font-weight: bold;
	text-align: center;
`;
export const QuoteAuthor = () => {
	const { setBtnActive } = useOutletContext<QuoteContexActive>();
	const [quotes, setQuotes] = useState<QuoteObject[]>([]);
	const [loading, setLoading] = useState(false);
	const [errorApi, setErrorApi] = useState(false);

	const { name } = useParams();

	useEffect(() => {
		const getDataApi = async () => {
			setLoading(true);
			try {
				const response = await fetchSinToken({ endpoint: `?limit=20&author=${name}` });
				if (response?.ok) {
					const result = await response.json();
					setQuotes(result.data);
				} else {
					setErrorApi(true);
				}
			} catch (error) {
				setErrorApi(true);
			} finally {
				setLoading(false);
			}
		};
		getDataApi();
	}, []);

	return (
		<>
			{loading ? (
				<Spinner />
			) : errorApi ? (
				<Error>An error occurred, try again later.</Error>
			) : quotes.length !== 0 ? (
				<ContainerQuote>
					<h2>{name}</h2>
					{quotes.map((quote) => (
						<Quote text={quote.quoteText} key={quote._id} />
					))}
					{quotes.length > 2 && <BtnRandom setBtnActive={setBtnActive} />}
				</ContainerQuote>
			) : (
				<Info>No Quotes Found</Info>
			)}
		</>
	);
};
