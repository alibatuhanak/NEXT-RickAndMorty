import React from "react";
import Image from "next/image";
import Link from "next/link";
import brand from "@/public/a.png";

const Header: React.FC = () => {
	return (
		<Link className="mt-3" href={"/"}>
			<div className="relative w-[42vw] h-[10vh] md:w-80 md:h-40 ">
				<Image src={brand} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="" />
			</div>
		</Link>
	);
};

export default Header;
