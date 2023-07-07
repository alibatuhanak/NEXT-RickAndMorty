import React from "react";

const Loading = () => {
	return (
		<div className="w-[80vw] h-auto flex justify-center items-center flex-col flex-wrap gap-x-4 gap-y-6 mt-10">
			{[...new Array(20).keys()].map(i => (
				<div
					key={i}
					className="max-[800px]:w-full w-2/3 h-60 max-[800px]:flex-col  mx-auto animate-pulse rounded-lg opacity-40 bg-white p-4 flex items-center justify-between  md:px-[40px] "
					style={{ animationDelay: `${i * 0.05}s`, animationDuration: "1s" }}
				>
					<div className="max-[800px]:w-28 max-[800px]:h-28 w-44 h-44 rounded-[50%] bg-black opacity-40"></div>
					<div className="max-[800px]:w-3/4 max-[800px]:ml-0 ml-10 bg-black opacity-25 w-1/2 h-10 rounded-xl"></div>
				</div>
			))}
		</div>
	);
};

export default Loading;
