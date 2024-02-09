import React from "react";

import { IoIosMore } from "react-icons/io";
import { CiSearch, CiUser, CiHeart, CiShoppingBasket, CiShop } from "react-icons/ci";

const Header: React.FC = () => {
    return (
        <>
            <header className="bg-white px-4 flex flex-col items-center justify-between w-screen">
                <section className="flex items-center justify-between relative w-screen h-[80px]">
                    <div className="flex items-left ml-16 max-md:hidden">
                        <button className="flex text-gray-900 text-[13px] hover:underline px-3 py-2 rounded-sm font-semibold items-center justify-center">
                            Client Service
                        </button>
                        <button className="flex text-gray-900 text-[13px] hover:underline px-3 py-2 rounded-sm font-semibold items-center justify-center">
                            Newsletter
                        </button>
                        <button className="flex text-gray-900 text-[13px] hover:underline px-3 py-2 rounded-sm font-semibold items-center justify-center">
                            Find Shop
                        </button>
                    </div>

                    <div className="flex items-center max-md:items-left ml-16 max-md:ml-6 h-[40px] w-[40px]">
                        <CiShop className="text-gray-900" size={40} />
                    </div>

                    <div className="flex items-right mr-16 max-md:mr-8">
                        <button className="flex items-center justify-center rounded-lg py-2 px-4 hover:bg-gray-100 hover:active:bg-slate-200">
                            <CiUser className="" size={20} />
                            <p className="text-gray-900 text-[14px] ml-2 max-sm:hidden">Log In</p>
                        </button>
                        <button className="group flex items-center justify-center rounded-lg py-2 px-4">
                            <CiHeart className="" size={20} />
                            <p className="text-gray-900 text-[14px] ml-2 group-hover:underline max-sm:hidden">Favorites</p>
                        </button>
                        <button className="group flex items-center justify-center rounded-lg py-2 px-4">
                            <CiShoppingBasket className="" size={20} />
                            <p className="text-gray-900 text-[14px] ml-2 group-hover:underline max-sm:hidden">Cart</p>
                        </button>
                    </div>
                </section>
                <section className="flex items-center justify-between relative w-screen h-[60px]">
                    <div className="flex items-left ml-16 max-md:ml-6">
                        <button className="flex items-center justify-center rounded-lg p-2 hover:bg-gray-100 hover:active:bg-slate-200">
                            <IoIosMore size={20} />
                        </button>
                    </div>

                    <div className="flex items-center">
                        <a href="" className="text-[15px] font-semibold text-gray-900 rounded-sm hover:underline">
                            She
                        </a>

                        <a href="" className="text-[15px] font-semibold text-gray-900 rounded-sm hover:underline ml-8">
                            Divided
                        </a>

                        <a href="" className="text-[15px] font-semibold text-gray-900 rounded-sm hover:underline ml-8">
                            Child
                        </a>

                        <a href="" className="text-[15px] font-semibold text-gray-900 rounded-sm hover:underline ml-8">
                            Baby
                        </a>

                        <a href="" className="text-[15px] font-semibold text-gray-900 rounded-sm hover:underline ml-8">
                            Home
                        </a>

                        <a href="" className="text-[15px] font-semibold text-gray-900 rounded-sm hover:underline ml-8">
                            Beauty
                        </a>

                        <a href="" className="text-[15px] font-semibold text-gray-900 rounded-sm hover:underline ml-8">
                            Sport
                        </a>

                    </div>
                    
                    <div className="flex items-right mr-16">
                        <form className="flex items-center justify-start px-2 w-[200px] h-[36px] border-solid border-slate-400 border-[1px] focus-within:border-blue-500 focus-within:border-[2px]">
                            <input spellCheck={false} placeholder="Search" id="search" type="text" className="bg-white outline-none h-[20px] px-2 text-[14px]" />
                            <CiSearch className="text-gray-900 mr-2" size={30} />
                        </form>
                    </div>
                </section>
            </header>
        </>
    );
};

export { Header };
