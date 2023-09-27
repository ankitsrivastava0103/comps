import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleExpandedClick = (expandIndex) => {
    if (expandedIndex === expandIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(expandIndex);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronRight />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleExpandedClick(index)}
        >
          {item.lable}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x brder-t rounded">{renderedItems}</div>;
};

export default Accordion;
