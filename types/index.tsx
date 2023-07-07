export interface IChar {
	id: number;
	name: string;
	status?: string;
	species?: string;
	type: string;
	gender: string;
	origin?: {
		name?: string;
		url?: string;
	};
	location?: {
		name?: string;
		url: string;
	};
	image: string;
	episode?: string[] | number[] | undefined[] | unknown[];
	url: string;
	created?: string;
}
export interface IResults {
	info?: null;
	results: IChar[];
}

export interface ICharProps {
	params: { id: string | number };
	searchParams: { [key: string]: string | string[] | undefined };
}
