import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FooterCard = ({ items, title }) => {
  return (
    <div>
      <h4 className="text-lg capitalize lg:text-xl font-semibold relative after:absolute after:w-12 after:h-0.5 after:bg-primary after:-bottom-1 after:left-0">
        {title}
      </h4>
      <ul className="mt-6 flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.id}>
            <button className="text-base inline-block text-tertiary font-medium hover:text-primary hover:duration-500 hover:transition-all cursor-pointer">
              <FontAwesomeIcon className="mr-1" icon={faArrowRight} />
              <span className="relative left-0 hover:left-3 hover:duration-500 hover:transition-all">
                {item.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterCard;
