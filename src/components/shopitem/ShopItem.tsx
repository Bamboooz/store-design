import React, { useState } from "react";

import { CiShoppingBasket, CiRuler, CiShop, CiCircleInfo, CiMail } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

enum Availability {
    AVAILABLE,
    UNAVAILABLE,
    LOW,
}

interface ShopItem {
	name: string;
	description: string;
	price: number;
	material: string;
	sizes: {
        [size: number]: Availability
    };
    images: React.ReactElement[];
}

const Item: React.FC<ShopItem> = ({ name, description, price, material, sizes, images }) => {
    if (images.length < 3) {
        console.error(`Product images provided for Store Item ${name} is less than required 3.`);
    }

    // first 3 items are: left image, current image, next image
    const [imageList, setImageList] = useState(images);
    const [selectedSize, setSelectedSize] = useState<number | null>(null);

    const hasLowStockItem = Object.values(sizes).some(availability => availability === Availability.LOW);
    const hasUnavailableItem = Object.values(sizes).some(availability => availability === Availability.UNAVAILABLE);

    const handleSizeChange = (newSize: number) => {
        setSelectedSize(newSize);
    };

    console.log(imageList.map(x => imageList.indexOf(x)));

    const handleArrowBack = () => {
        setImageList((prevImageList) => {
            const newImageList = prevImageList.map((_, i) => (i === 0 ? prevImageList[prevImageList.length - 1] : prevImageList[i - 1]));
            console.log(newImageList.map(x => newImageList.indexOf(x)));
            return newImageList;
        });
    };
    
    const handleArrowForward = () => {
        setImageList((prevImageList) => {
            const newImageList = prevImageList.map((_, i) => (i === prevImageList.length - 1 ? prevImageList[0] : prevImageList[i + 1]));
            console.log(newImageList.map(x => newImageList.indexOf(x)));
            return newImageList;
        });
    };    

    return (
        <>
            <section className="flex max-md:flex-col items-start max-md:items-center justify-center m-20">
				<section className="flex flex-col items-center justify-center mt-4">
                    {React.cloneElement(imageList[1], { className: "h-[80vh] rounded-sm" })}
                    <div className="flex items-center jusitfy-between mt-8">
                        <button onClick={handleArrowBack} className="flex items-center justify-center mr-8 p-2 rounded-lg hover:bg-gray-100 hover:active:bg-slate-200">
                            <IoIosArrowBack className="text-gray-900" size={26} />
                        </button>

                        {images.map(image => {
                            if (image === imageList[1]) {
                                return React.cloneElement(image, { className: "h-[12vh] mb-3 z-50", key: imageList.indexOf(image) });
                            } else if (image === imageList[0]) {
                                return (
                                    <div key={imageList.indexOf(image)} className="relative z-0 overflow-hidden bg-cover -rotate-12">
                                        {React.cloneElement(image, { className: "-top-0 h-[12vh]" })}
                                        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-300 bg-fixed opacity-50" />
                                    </div>
                                );
                            } else if (image === imageList[2]) {
                                return (
                                    <div key={imageList.indexOf(image)} className="relative z-0 overflow-hidden bg-cover rotate-12">
                                        {React.cloneElement(image, { className: "-top-0 h-[12vh]" })}
                                        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-300 bg-fixed opacity-50" />
                                    </div>
                                );
                            }
                        })}

                        <button onClick={handleArrowForward} className="flex items-center justify-center ml-8 p-2 rounded-lg hover:bg-gray-100 hover:active:bg-slate-200">
                            <IoIosArrowForward className="text-gray-900" size={26} />
                        </button>
                    </div>
                </section>

				<section className="flex flex-col items-start justify-center w-[34vw] md:ml-16 mt-8">
					<p className="text-[28px] text-gray-900 font-lighter">{name}</p>
					<p className="text-[16px] text-gray-600 font-lighter wrap mt-2 ml-.5">{description}</p>
					<p className="text-[18px] text-gray-900 font-semibold mt-8">{price}$</p>
					<p className="text-[14px] text-gray-600 font-lighter mt-8">{material}</p>
                    <div className="flex items-center justify-between w-full">
                        <p className="text-[14px] text-gray-600 font-lighter mt-8">Sizes</p>
                        {hasLowStockItem &&
                            <div className="flex items-center justify-center">
                                <div className="bg-red-500 h-[8px] w-[8px] mt-[34px] rounded-full" />
                                <p className="text-[14px] text-gray-600 mt-8 ml-2">Only a few items left!</p>
                            </div>
                        }
                    </div>
					<div className="flex flex-wrap items-center justify-start mt-2 gap-y-3 last:mr-0">
                        {Object.keys(sizes).map(size => {
                            const numSize = Number(size);
                            const available = sizes[numSize] === Availability.AVAILABLE || sizes[numSize] === Availability.LOW;
                            const isLow = sizes[numSize] === Availability.LOW;
                            const isSelected = selectedSize === numSize;
                            const func = available ? () => handleSizeChange(numSize) : () => {};
                            const extraClass = available ? isSelected ? "bg-gray-900 border-gray-800 text-white" : "bg-white text-gray-900 border-gray-400" : "bg-gray-300 text-gray-900 border-gray-400";

                            return (
                                <button key={numSize} onClick={func} className={`${extraClass} h-[40px] w-[90px] text-[13px] font-semibold rounded-sm border-solid border-[1px] mr-2 p-4 flex items-center justify-center`}>
                                    {isLow &&
                                        <div className="bg-red-500 h-[8px] w-[8px] mr-2 rounded-full" />
                                    }
                                    {size}
                                </button>
                            );
                        })}
					</div>
                    <div className="flex items-center justify-between w-full">
                        <a href="" className="flex items-center justify-center mt-8">
					    	<CiRuler className="text-gray-900" size={18} />
					    	<p className="text-[13px] text-gray-900 ml-2 underline">See size chart</p>
					    </a>
                        {hasUnavailableItem &&
                            <a href="" className="flex items-center justify-center mt-8">
					    	    <CiMail className="text-gray-900" size={18} />
					    	    <p className="text-[13px] text-gray-900 ml-2 underline">Unavailable size?</p>
					        </a>
                        }
                    </div>
					<button className="flex justify-center items-center w-full h-[42px] mt-2 rounded-sm bg-gray-900 hover:bg-black">
						<CiShoppingBasket className="text-white" size={22} />
						<p className="text-white text-[16px] ml-2">Add to cart</p>
					</button>
					<div className="flex items-center justify-center mt-8">
						<CiShop className="text-gray-900" size={18} />
						<p className="text-[13px] text-gray-900 ml-2">Find in shops</p>
					</div>
					<div className="flex items-start justify-center mt-2">
						<CiCircleInfo className="text-gray-900" size={18} />
						<p className="text-[13px] text-gray-900 ml-2 wrap">Free delivery for Club Members on orders above 50$, and for Premium Club Members free forever.</p>
					</div>
				</section>
			</section>
        </>
    );
};

export { Item, Availability };
