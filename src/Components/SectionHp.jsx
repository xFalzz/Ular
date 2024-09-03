import React from "react"
import MediaControlCard from "./MediaControlCard"

const SectionHp = () => {
	return (
		<div
			className="md:flex relative h-[79vh] w-auto pl-[10%] pr-[18%] md:justify-center bottom-16 border-b-[8px] border-t-[8px] border-[#232323] shadow-lg md:mt-12 mt-[-5%]"
			id="SectionHp">
			<div className="md:w-1/2 flex justify-center items-center md:flex mt-[-10%]" id="ContainerHp">
				<img
					src="public/images/Phones.jpg"
					alt="Gambar"
					className="md:float-left float-none md:mr-0 md:mb-0 absolute  md:top-[13%]"
					id="ImagesHp"
				/>
				<MediaControlCard />
			</div>
			<div
				className="md:w-1/2 text-white flex flex-col justify-center py-[5%] text-center md:text-left opacity-[90%]"
				id="ContainerTextPhone">
				<h1 className="md:text-5xl text-3xl font-black">Discover the magic of snake care secrets!</h1>
				<p className="mt-4 md:text-2xl text-1xl w-full">
					Share your wisdom on behavior training, enriching their environment, and more. Together,
					we can unlock the full potential of our feline friends.
				</p>
			</div>
		</div>
	)
}

export default SectionHp
