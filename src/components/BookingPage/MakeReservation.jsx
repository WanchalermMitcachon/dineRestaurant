import React, { useState } from "react";
import arrowIcon from "/icons/icon-arrow.svg";
import arrowUpIcon from "/icons/icon-arrow-up.svg";
import arrowCheck from "/icons/icon-check.svg";
import minus from "/icons/icon-minus.svg";
import plus from "/icons/icon-plus.svg";
import parttern from "/patterns/pattern-curve-bottom-right.svg";
import partternLines from "/patterns/pattern-lines.svg";

function MakeReservation() {
  const [openDropdown, setOpenDropDown] = useState(false);
  const [period, setPeriod] = useState("AM");
  const [peopleNumber, setPeopleNumber] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");

  const [errors, setErrors] = useState({});

  const handleDecreasePeople = () => {
    if (peopleNumber > 1) {
      setPeopleNumber(peopleNumber - 1);
    }
  };

  const handleIncreasePeople = () => {
    setPeopleNumber(peopleNumber + 1);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!name) newErrors.name = "The field is required.";
    if (!email) newErrors.email = "The field is required.";
    else if (!validateEmail(email))
      newErrors.email = "Please use a valid email address.";
    if (!month) newErrors.month = "Month is required";
    if (!day) newErrors.day = "Day is required";
    if (!year) newErrors.year = "Year is required";
    if (!hour) newErrors.hour = "Hour is required";
    if (!minute) newErrors.minute = "Minute is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // proceed with form submission
      console.log("Form submitted");
    }
  };

  return (
    <div className="flex justify-center relative mx-6 md:mx-8 md:mb-[-8rem] lg:flex-row-reverse lg:justify-between lg:mx-0">
      <div className="h-[640px] lg:h-[520px] lg:flex lg:justify-center lg:items-center ">
        <img
          src={parttern}
          alt="parttern"
          className="hidden lg:block lg:h-full lg:w-screen lg:mr-[32rem] lg:pb-[8rem]"
        />
      </div>
      <img
        className="hidden lg:block lg:absolute lg:bottom-[12.5rem] right-[37rem] lg:z-0 "
        src={partternLines}
        alt="pattern lines"
      ></img>
      <div className="p-8 shadow-dropdown w-full absolute top-[-8.5rem] bg-white md:top-[-12rem] md:max-w-[650px] lg:max-w-[580px] lg:mx-auto lg:mr-20 lg:z-10 lg:top-[-20.5rem]">
        {/* Name */}
        <div
          className={`my-6 border-b-2 border-[#8E8E8E] md:mx-8 ${
            errors.name && "border-red-300"
          }`}
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`outline-none w-full h-14 px-4 placeholder:text-body-1 placeholder:leading-s ${
              errors.name && "placeholder:text-red-300 "
            }`}
          />{" "}
          {errors.name && (
            <p className="absolute text-red-300 text-xs ml-4 mt-2">
              {errors.name}
            </p>
          )}
        </div>
        {/* Email */}
        <div
          className={`my-6 border-b-2 border-[#8E8E8E] md:mx-8 ${
            errors.email && "border-red-300"
          }`}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`outline-none w-full h-14 px-4 placeholder:text-body-1 placeholder:leading-s ${
              errors.email && "placeholder:text-red-300 "
            }}`}
          />
          {errors.email && (
            <p className="absolute text-red-300 text-xs ml-4 mt-2">
              {errors.email}
            </p>
          )}{" "}
        </div>
        {/* Pick a date */}
        <div className="my-8 md:flex md:mx-8 md:items-center md:space-x-12 relative">
          <h1
            className={`block text-body-1 leading-s md:w-full ${
              (errors.month || email.year || errors.day) && "text-red-500"
            }`}
          >
            Pick a date
          </h1>
          {(errors.month || email.year || errors.day) && (
            <p className="text-red-300 text-xs absolute left-[0rem] top-6 md:left-[-3rem] md:top-[2.5rem]">
              The field is in complete
            </p>
          )}
          <div className="flex justify-center space-x-5 md:grid md:grid-cols-3 md:w-[1400px]">
            <div
              className={`flex-1 py-4 border-b-2 border-[#8E8E8E] px-4 ${
                errors.day ? "border-red-300 " : ""
              }}`}
            >
              <input
                type="number"
                placeholder="MM"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className={`outline-none max-w-[2.5rem] ${
                  errors.month && "placeholder:text-red-300"
                }`}
              />
            </div>
            <div
              className={`flex-1 py-4 border-b-2 border-[#8E8E8E] px-4 ${
                errors.day ? "border-red-300 " : ""
              }}`}
            >
              <input
                type="number"
                placeholder="DD"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className={`outline-none max-w-[2.5rem] ${
                  errors.day && "placeholder:text-red-300"
                }`}
              />
            </div>
            <div
              className={`flex-1 py-4 border-b-2 border-[#8E8E8E]  px-4 ${
                errors.year ? "border-red-300 " : ""
              }}`}
            >
              {" "}
              <input
                type="number"
                placeholder="YYYY"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className={`outline-none max-w-[2.5rem] ${
                  errors.year && "placeholder:text-red-300"
                }`}
              />
            </div>
          </div>
        </div>
        {/* Pick a time */}
        <div className="my-8 md:flex md:space-x-12 md:items-center md:mx-8 relative">
          <h1
            className={`block text-body-1 leading-s md:w-full ${
              (errors.hour || email.minute) && "text-red-500"
            }`}
          >
            Pick a time
          </h1>
          {(errors.hour || email.minute) && (
            <p className="text-red-300 text-xs absolute left-[0rem] top-[22px] md:left-[-3rem] md:top-[2.5rem]">
              The field is in complete
            </p>
          )}
          <div className="flex space-x-4 md:grid md:grid-cols-3 md:w-[1400px]">
            <div
              className={`w-[100%] py-4 px-4 border-b-2 border-[#8E8E8E] ${
                errors.hour && "border-red-300"
              }  `}
            >
              <input
                type="number"
                placeholder="09"
                value={hour}
                onChange={(e) => setHour(e.target.value)}
                className={`outline-none placeholder:text-body-1 placeholder:leading-s max-w-[2.5rem] ${
                  errors.hour && "placeholder:text-red-300"
                }  `}
              />
            </div>
            <div
              className={`w-[100%] py-4 px-4 border-b-2 border-[#8E8E8E] md:w-[90%] ${
                errors.minute && "border-red-300"
              }`}
            >
              <input
                type="number"
                placeholder="00"
                value={minute}
                onChange={(e) => setMinute(e.target.value)}
                className={`outline-none placeholder:text-body-1 placeholder:leading-s max-w-[2.5rem] ${
                  errors.minute && "placeholder:text-red-300"
                }`}
              />
            </div>
            <div className="relative w-[120%] md:w-[90%] py-4 border-b-2 border-[#8E8E8E]">
              <button
                className="flex items-center space-x-4"
                onClick={() => setOpenDropDown(!openDropdown)}
              >
                <p className="pl-4 text-body-1 leading-s">{period}</p>
                <img src={openDropdown ? arrowUpIcon : arrowIcon} alt="arrow" />
              </button>
              {openDropdown && (
                <div className="absolute shadow-dropdown bg-white text-body-1">
                  <button
                    onClick={() => {
                      setPeriod("AM");
                      setOpenDropDown(false);
                    }}
                    className="flex items-center px-4 space-x-2"
                  >
                    {period === "AM" && <img src={arrowCheck} alt="check" />}
                    <span
                      className={`${
                        period !== "AM" && "ml-5"
                      } hover:text-beaver`}
                    >
                      AM
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      setPeriod("PM");
                      setOpenDropDown(false);
                    }}
                    className="flex items-center px-4 space-x-2"
                  >
                    {period === "PM" && <img src={arrowCheck} alt="check" />}
                    <span
                      className={`${
                        period !== "PM" && "ml-5"
                      } hover:text-beaver`}
                    >
                      PM
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* people */}
        <div className="border-b-2 border-[#8E8E8E] mt-8 mb-10 py-6">
          <div className="flex justify-around items-center">
            <img
              src={minus}
              className="h-1 w-3 cursor-pointer"
              onClick={handleDecreasePeople}
              alt="minus"
            />
            <h1 className="font-bold text-body-1 leading-m">
              <span>{peopleNumber}</span> people
            </h1>
            <img
              src={plus}
              className="h-3 w-3 cursor-pointer font-bold"
              onClick={handleIncreasePeople}
              alt="plus"
            />
          </div>
        </div>
        {/* button */}
        <div className="">
          <button
            className="lightDefaultButton hover:lightHoverButton w-full"
            onClick={handleSubmit}
          >
            MAKE RESERVATION
          </button>
        </div>
      </div>
    </div>
  );
}

export default MakeReservation;
