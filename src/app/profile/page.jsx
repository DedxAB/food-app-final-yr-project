"use client";
import { Button } from "@/components/ui/button";
import { InputProfile } from "@/components/ui/inputprofile";
import { Heart, KeyRound, MailCheck, MapPin, MoveLeft, Phone, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// ProfilePage
const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("Edit");
  const [placeholder, setPlaceHolder] = useState("NA");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [addressDetails, setAddressDetails] = useState({
    name: "",
    number: "",
    city: "",
    state: "",
    pin: "",
  });
  const inputClass = !isEditing
    ? "ml-auto"
    : "ml-auto border rounded-md overflow-hidden border-red-400";

  const handleButtonClick = () => {
    setIsFormVisible(true);
  };
  const handleEditClick = () => {
    event.preventDefault();
    setIsEditing(!isEditing);
    if (text == "Edit") {
      setText("Save");
    } else {
      setText("Edit");
    }
    if (isEditing) {
      setPlaceHolder(placeholder);
    } else {
      setPlaceHolder("");
    }
  };

  const handleSaveAddress = () => {
    console.log("Address details saved:", addressDetails);

    // Save the address to the list
    setSavedAddresses((prevAddresses) => [...prevAddresses, addressDetails]);

    // Reset the form and hide it
    setAddressDetails({
      name: "",
      number: "",
      street: "",
      city: "",
      state: "",
      pin: "",
    });
    setIsFormVisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleDeleteAddress = (index) => {
    // Remove the address from the list based on the index
    setSavedAddresses((prevAddresses) =>
      prevAddresses.filter((_, i) => i !== index)
    );
  };

  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        // Clicked outside the form, close it
        setIsFormVisible(false);
      }
    };

    // Add event listener when the form is visible
    if (isFormVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove event listener when the form is hidden
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFormVisible]);

  return (
    <>
      <div className="flex items-center justify-between p-5 bg-white">
        <Link href="/restaurant/23">
          <Button variant="outline" className="rounded-full" size="icon">
            <MoveLeft className="w-5" />
          </Button>
        </Link>
        <div className="text-center text-xl font-bold flex items-center gap-2">
          <span>Your Profile</span>
        </div>
        <Button size="icon">
          <Heart className="w-4" />
        </Button>
      </div>
      <div className="flex flex-col items-center p-8 bg-gray-100">
        <div className="relative rounded-full overflow-hidden border-4 border-red-500">
          <Image
            className="object-cover"
            src={"/assets/avatar.jpg"}
            width={150}
            height={150}
            alt="/"
            priority
          />
        </div>
        <p className="mt-4 text-2xl font-bold">Ankit Acharjee</p>
      </div>
      <form className="bg-white py-4 rounded-md shadow-lg">
        <div className="p-5 mb-5">
          <p className="flex justify-between font-bold ">
            {" "}
            <span>Personal Information</span>
            <Button
              onClick={handleEditClick}
              variant="ankit"
              size="ankitSize"
              className="text-red-500 font-bold"
            >
              {text}
            </Button>
          </p>
          <div className="mt-3 border-2 rounded-xl  ">
            <div className="flex py-3 px-3 border-b-2 text-sm items-center">
              <MailCheck className="w-4" />
              <span className="pl-2">Email</span>
              <InputProfile
                className={inputClass}
                disabled={!isEditing}
                type="email"
                placeholder={placeholder}
                autoComplete="current-password"
              />
            </div>
            <div className="flex py-3 px-3 border-b-2 text-sm items-center">
              <KeyRound className="w-4" />
              <span className="pl-2">Password</span>
              <InputProfile
                className={inputClass}
                disabled={!isEditing}
                type="password"
                placeholder={placeholder}
              />
            </div>
            <div className="flex py-3 px-3 text-sm items-center">
            <Phone className="w-4" />
              <span className="pl-2">Phone</span>
              <InputProfile
                className={inputClass}
                disabled={!isEditing}
                type="number"
                placeholder={placeholder}
              />
            </div>
          </div>
        </div>
      </form>
      <div className="bg-white p-8 mt-8 rounded-md shadow-lg">
        <p className="flex justify-between font-bold">
          {" "}
          <span>Addresses</span>
          <Button
            onClick={handleButtonClick}
            variant="ankit"
            size="ankitSize"
            className="text-red-500 font-bold"
          >
            Add a new address
          </Button>
        </p>

        {isFormVisible && (
          <form>
            <div className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm backdrop-brightness-50 bg-opacity-50 bg-white ">
              <div
                ref={formRef}
                className="bg-white p-8 rounded-lg backdrop-blur-lg shadow-md border border-gray-300 bg-opacity-70"
              >
                {/* Address form */}
                <label className="block mb-4">
                  Name:
                  <input
                    required
                    type="text"
                    name="name"
                    value={addressDetails.name}
                    onChange={handleInputChange}
                    className="block w-full border rounded-md p-2 bg-opacity-50"
                  />
                </label>
                <label className="block mb-4">
                  Number:
                  <input
                    required
                    type="number"
                    name="number"
                    value={addressDetails.number}
                    onChange={handleInputChange}
                    className="block w-full border rounded-md p-2 bg-opacity-50"
                  />
                </label>
                <label className="block mb-4">
                  Street:
                  <input
                    required
                    type="text"
                    name="street"
                    value={addressDetails.street}
                    onChange={handleInputChange}
                    className="block w-full border rounded-md p-2 bg-opacity-50"
                  />
                </label>
                <label className="block mb-4">
                  City:
                  <input
                    required
                    type="text"
                    name="city"
                    value={addressDetails.city}
                    onChange={handleInputChange}
                    className="block w-full border rounded-md p-2 bg-opacity-50"
                  />
                </label>
                <label className="block mb-4">
                  State:
                  <input
                    required
                    type="text"
                    name="state"
                    value={addressDetails.state}
                    onChange={handleInputChange}
                    className="block w-full border rounded-md p-2 bg-opacity-50"
                  />
                </label>
                <label className="block mb-4">
                  Pin:
                  <input
                    required
                    type="number"
                    name="pin"
                    value={addressDetails.pin}
                    onChange={handleInputChange}
                    className="block w-full border rounded-md p-2 bg-opacity-50"
                  />
                </label>
                {/* Save button */}
                <button
                  onClick={handleSaveAddress}
                  className="bg-red-600 text-white px-4 py-2 rounded-md backdrop-blur-lg"
                >
                  Save Address
                </button>
              </div>
            </div>
          </form>
        )}

        {savedAddresses.map((savedAddress, index) => (
          <div
            key={index}
            className="mt-3 border border-red-500 bg-white rounded-md shadow-lg p-4"
          >
            <div className="py-3 px-2 text-sm items-center border-b border-red-500">
              <div className="flex items-center">
                <MapPin className="text-red-500" />
                <span className="pl-2 font-bold text-gray-800">
                  {savedAddress.name}
                </span>
                <Trash
                  className="ml-auto cursor-pointer text-gray-500 hover:text-red-500"
                  size={20}
                  strokeWidth={1.75}
                  onClick={() => handleDeleteAddress(index)}
                />
              </div>
            </div>
            <div className="text-sm px-3 py-1 text-gray-500">
              {savedAddress.street}, {savedAddress.city}, {savedAddress.state},{" "}
              {savedAddress.pin}
            </div>
            <div className="text-sm px-3 py-2 text-gray-500">
              {savedAddress.number}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfilePage;
