import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Pannel from "./Pannel";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const domClickHandler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", domClickHandler, true);
    return () => {
      document.removeEventListener("click", domClickHandler);
    };
  }, []);

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
    <div ref={divEl} className="w-48 relative">
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
