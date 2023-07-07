import { IChar } from "@/types";
import { IResults } from "@/types";
import { notFound } from "next/navigation";

export const fetchApi = async (id: number | string): Promise<IResults> => {
	const res: Response = await fetch(`${process.env.API_KEY}/api/character?page=${id}`);
	if (!res.ok) {
		notFound();
	}
	return res.json();
};

export const singleFetch = async (id: number | string): Promise<IChar> => {
	const res: Response = await fetch(`${process.env.API_KEY}/api/character/${id}`);
	// if (!res) throw new Error("No single data found.");
	if (!res.ok) notFound();
	return res.json();
};
