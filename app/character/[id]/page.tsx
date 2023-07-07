import React from "react";
import { Metadata } from "next";
import { IChar, IResults } from "@/types/index";
import { ICharProps } from "@/types/index";
import { fetchApi, singleFetch } from "@/services/api";
import Image from "next/image";
import { roboto } from "@/app/styles/fonts";

export const generateMetadata: ({ params, searchParams }: ICharProps) => Promise<Metadata> = async ({
	params,
	searchParams,
}: ICharProps): Promise<Metadata> => {
	const { id } = params;
	const data: IChar = await singleFetch(id);

	const name: string[] = data.name.split(" ");
	var shortName: string = "";

	for (var i = 0; i < name.length - 1; i++) {
		shortName += `${name[i][0]}. `;
	}

	return {
		title: `${shortName + name.slice(-1)}`,
		icons: {
			icon: data.image,
		},
	};
};

const Page: React.FC<ICharProps> = async ({ params, searchParams }) => {
	const data = await singleFetch(params.id);

	return (
		<div className="p-4 w-full mt-3 bg-black min-h-[70vh] flex items-center justify-center ">
			<div
				className={
					roboto.className + " border-4 border-ram overflow-hidden relative  w-72 h-[500px] bg-white p-2 flex justify-start rounded-lg text-black"
				}
			>
				<div className="w-auto px-2 flex items-center justify-center font-semibold rounded-md h-8 bg-ram text-white absolute top-5 right-5 z-10">
					{data?.status}
				</div>
				<Image
					className="pointer-events-none mask absolute top-0 left-0 right-0 mx-auto w-full object-contain"
					src={data?.image}
					width={100}
					height={50}
					alt=""
				/>
				<div className="self-end h-2/5 flex flex-col p-3 items-start justify-between">
					<h1 className="font-bold text-lg text-center">{data?.name}</h1>
					<div>
						<h1>{data?.gender}</h1>
						<h1>{data?.species}</h1>
						<h1 className="mt-2 font-semibold">{data?.location?.name}</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;

export const generateStaticParams = async () => {
	const data1: Promise<IResults> = fetchApi(1);
	const data2: Promise<IResults> = fetchApi(2);
	const data3: Promise<IResults> = fetchApi(3);
	const data4: Promise<IResults> = fetchApi(4);
	const data5: Promise<IResults> = fetchApi(5);

	const [dataResult1, dataResult2, dataResult3, dataResult4, dataResult5]: IResults[] = await Promise.all([data1, data2, data3, data4, data5]);
	const allData: IChar[] = dataResult1.results.concat(dataResult2.results, dataResult3.results, dataResult4.results, dataResult5.results);

	return allData.map(item => ({
		id: item.id.toString(),
	}));
};
