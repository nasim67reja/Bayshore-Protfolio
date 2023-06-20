"use client";

import SectionLayout from "@/components/universal/SectionLayout";
import Image from "next/image";
import React from "react";
import GoogleMapReact from "google-map-react";
interface con {
  title: string;
  icon: string;
}
const Row: React.FC<con> = ({ title, icon }) => {
  return (
    <div className="">
      <h4 className="heading-four mb-2 flex items-center gap-4">
        <span>
          <Image
            src={icon}
            alt="contact-office"
            width={600}
            height={80}
            className="w-[2rem] h-auto object-cover"
          />
        </span>
        <span>{title}</span>
      </h4>
      <p className="text-small">+1 (321) 765-9177</p>
    </div>
  );
};
interface col {
  title: string;
}
const Adress = ({ title }: col) => {
  return (
    <div className="">
      <h3 className="heading-tertiary">{title}</h3>
      <div className="flex flex-col gap-3">
        <Row title="Phone" icon="/assets/phone.svg" />
        <Row title="Address" icon="/assets/location.svg" />
        <Row title="Email" icon="/assets/email.svg" />
      </div>
    </div>
  );
};

const page = () => {
  return (
    <>
      <Image
        src="/assets/contact.png"
        alt="contact-office"
        width={2000}
        height={600}
        className="w-full h-auto object-cover"
      />
      <SectionLayout bg="">
        <div className="flex justify-between">
          <Adress title="Tampa" />
          <Adress title="Dhaka" />
          <Adress title="Dubai" />
        </div>
      </SectionLayout>
      <SectionLayout bg="">
        <div className="max-w-[600px] mx-auto">
          <h4 className="heading-four !text-center">
            Just send us your questions or concerns by starting a new message
            and we will give you the help you need.
          </h4>
          <Form />
        </div>
      </SectionLayout>
      <SectionLayout bg="">
        <SimpleMap />
      </SectionLayout>
    </>
  );
};

export default page;

const Form = () => {
  return (
    <form className="flex flex-col items-center mt-8 gap-8">
      <input
        className="appearance-none border border-[#CED4DA] rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]"
        id="name"
        type="text"
        placeholder="Enter your name"
      />
      <input
        className="appearance-none border rounded w-full py-4 px-4 text-gray-700 border-[#CED4DA] leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]"
        id="email"
        type="email"
        placeholder="Enter your email"
      />
      <input
        className="appearance-none border border-[#CED4DA] rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]"
        id="subject"
        type="text"
        placeholder="Enter the subject"
      />
      <textarea
        className="appearance-none border border-[#CED4DA] rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-44 resize-none text-small !text-[#6C757D]"
        id="description"
        placeholder="Enter your description"
      ></textarea>
      <button className="btn mt-4 text-small" type="button">
        Send Message
      </button>
    </form>
  );
};

interface IProps {
  lat: number;
  lng: number;
  text: string;
}

const AnyReactComponent: React.FC<IProps> = ({ text }) => <div>{text}</div>;

interface ICenter {
  lat: number;
  lng: number;
}

const SimpleMap: React.FC = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDaERPmsWGDCk2MrKXsqkMfPkSu614Simk" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};
