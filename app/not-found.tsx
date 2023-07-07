import Image from "next/image";
import React from "react";
import imageNotFound from "@/public/404.png";
import Link from "next/link";
import { caveat } from "@/app/styles/fonts";

//not yet supported
// export const metadata: Metadata = {
// 	title: "",
// };

const NotFound = () => {
	return (
		<div className={"flex flex-col items-center justify-center max-[800px]:text-xl text-2xl mt-2 leading-[3rem] p-5 " + caveat.className}>
			<title>Not Found | R&M</title>
			<Image className="max-[800px]:w-40 object-cover" src={imageNotFound} width={300} height={300} alt="404" />
			<div className="mt-4 flex flex-col justify-center items-center text-center">
				<h1 className="max-[800px]:text-3xl text-[3rem] font-extrabold ">Page not found</h1>
				<p>We're sorry, the page you requested could not be found. Please go back to homepage or contact us at example@support.com</p>
			</div>

			<Link className="mt-10" href={"/"}>
				<button className="bg-ram rounded-2xl px-4 py-1">Go Home</button>
			</Link>
		</div>
	);
};

export default NotFound;
