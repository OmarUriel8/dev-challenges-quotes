export interface QuoteObject {
	_id: string;
	quoteText: string;
	quoteAuthor: string;
	quoteGenre: string;
}

export interface QuoteContexActive {
	btnActive: boolean;
	setBtnActive: Function;
}
