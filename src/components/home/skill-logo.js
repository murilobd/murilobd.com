import React from "react";

const SkillLogo = ({ src, alt, padding = 8 }) => {
	return (
		<div
			className={`col-span-1 flex justify-center py-${padding} px-${padding} bg-gray-50 z-10`}
		>
			<img className="max-h-14" src={src} alt={alt} />
		</div>
	);
};

export default SkillLogo;
