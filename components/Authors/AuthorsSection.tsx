import React from "react";

export type Author = {
  name: string;
  role: string;
  alternative?: string;
};
interface IProps {
  title: string;
  people: Author[];
  customClass?: string;
}

const AuthorsSection = ({ title, people, customClass }: IProps) => {
  return (
    <div
      className={`bg-white dark:bg-black flex flex-col px-4 text-center ${
        customClass ? customClass : ""
      }
`}
    >
      <h4 className="font-serif uppercase">{title}</h4>
      <ul className="font-serif list-none p-0">
        {people.map((person) =>
          person.name ? (
            <li key={person.name} className="p-0">
              <div>
                {person.name} {person.role ? `(${person.role})` : ""}
              </div>
            </li>
          ) : (
            <li key={person.alternative} className="p-0">
              {person.alternative}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default AuthorsSection;
