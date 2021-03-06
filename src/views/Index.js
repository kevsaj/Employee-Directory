/*eslint-disable*/
import React, { Component } from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import FriendCard from "../components/FriendCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import friends from "../components/friends.json";

import CardTable from "components/Cards/CardTable.js";

import HeaderStats from "components/Headers/HeaderStats.js";

export default function Index() {



  return (
    <>
    <main>
      <Wrapper>
        <Title>Employee Directory</Title>
      </Wrapper>
      

      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-gray-700">
                Search Employee
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                <div class="relative flex w-full flex-wrap items-stretch mb-3">
                  <input type="text" placeholder="Large Input" class="px-3 py-4 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
                  <span class="z-10 h-full leading-normal font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-lg items-center justify-center w-8 right-0 pr-3 py-4">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
              </p>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={require("../assets/img/pattern_react.png")}
          alt="..."
        />
      </section>

      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>

      <HeaderStats />
    </main>

      <Footer />

      
    </>
  );
}
