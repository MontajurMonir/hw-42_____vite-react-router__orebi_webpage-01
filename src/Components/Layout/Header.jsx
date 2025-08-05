import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from '/src/assets/logo.png'

const Header = () => {
  return (
    <>
      <div className="bg-gray-300 py-5">
        <Container>
          <Flex>
            <div className="">
              <Image imgSrc={Logo} imgAlt="this is logo"/>
            </div>
            <div className="w-full">
              <ul className="flex justify-center">
                <li className="px-5 text-[14px] text-[#767676] hover:text-[]">
                  Home
                </li>
                <li className="px-5 text-[14px] text-[#767676] hover:text-[]">
                  Shop
                </li>
                <li className="px-5 text-[14px] text-[#767676] hover:text-[]">
                  About
                </li>
                <li className="px-5 text-[14px] text-[#767676] hover:text-[]">
                  Contacts
                </li>
                <li className="px-5 text-[14px] text-[#767676] hover:text-[]">
                  Journal
                </li>
              </ul> 
            </div>
          
          </Flex>
        </Container>  
      </div>
    </>
  );
};

export default Header;
