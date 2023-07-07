import React from "react";
import { fetchApi } from "@/services/api";
import CharacterDetail from "./CharacterDetail";
import { IChar } from "@/types/index";
import { IResults } from "@/types/index";

const List: React.FC = async () => {
	const data1: Promise<IResults> = fetchApi(1);
	const data2: Promise<IResults> = fetchApi(2);
	const data3: Promise<IResults> = fetchApi(3);
	const data4: Promise<IResults> = fetchApi(4);
	const data5: Promise<IResults> = fetchApi(5);

	const [dataResult1, dataResult2, dataResult3, dataResult4, dataResult5]: IResults[] = await Promise.all([data1, data2, data3, data4, data5]);
	const allData: IChar[] = dataResult1.results.concat(dataResult2.results, dataResult3.results, dataResult4.results, dataResult5.results);

	const sleep = (ms: number) => {
		return new Promise(resolve => setTimeout(resolve, ms));
	};

	await sleep(3000);
	return (
		<div className="w-[80vw] h-auto flex justify-center items-center flex-col flex-wrap gap-x-4 gap-y-6">
			{allData
				?.sort((a: IChar, b: IChar) => {
					if (a.name > b.name) {
						return 1;
					} else if (a.name < b.name) {
						return -1;
					}
					return 0;
				})
				.map(char => (
					<CharacterDetail key={char.id} char={char} />
				))}
		</div>
	);
};

export default List;
