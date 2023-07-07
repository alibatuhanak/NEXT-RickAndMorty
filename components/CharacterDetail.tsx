import { IChar } from "@/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { caveat } from "@/app/styles/fonts";

interface IDetailProps {
	char: IChar;
}

const CharacterDetail: React.FC<IDetailProps> = ({ char }) => {
	return (
		<Link className={caveat.className + " max-[800px]:w-full w-2/3 h-auto"} href={`/character/${char.id}`}>
			<div className="transition-all duration-300 ease-linear max-[800px]:flex-col text-[#4cb5c3] hover:text-white h-60 w-full rounded-lg  hover:bg-ram an min-[801px]:hover:animate-inAnim p-4 flex items-center justify-between md:px-[40px] ">
				<Image className="rounded-[50%] h-44 max-[800px]:w-32 max-[800px]:h-32" src={char?.image} alt={char?.name} width={200} height={120} />
				<h2 className={"max-[800px]:ml-0 ml-10 max-[800px]:text-3xl text-4xl font-bold self-center text-center "}>{char?.name}</h2>
			</div>
		</Link>
	);
};

export default CharacterDetail;
