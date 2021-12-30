import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QouteRandom } from '../components/QouteRandom';
import { QuotePage } from '../pages/QuotePage';
import { QuoteAuthor } from '../components/QuoteAuthor';
import { Error404Page } from '../pages/Error404Page';

export const AdminRoute = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<QuotePage />}>
						<Route path="random" element={<QouteRandom />} />
						<Route path="author/:name" element={<QuoteAuthor />} />
					</Route>
					<Route path="/error" element={<Error404Page />} />
					<Route path="*" element={<Navigate to="/error" />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};
