import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Pannel from "./Pannel";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClick = () => {
    setIsOpen(!isOpen);
    // setIsOpen((currentOpen) => !currentOpen)
  };

  const handleOptionClick = (selectedOption) => {
    setIsOpen(false);
    onChange(selectedOption);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <Pannel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleOpenClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Pannel>
      {isOpen && (
        <Pannel className="absolute top-full">{renderedOptions}</Pannel>
      )}
    </div>
  );
};

export default Dropdown;
