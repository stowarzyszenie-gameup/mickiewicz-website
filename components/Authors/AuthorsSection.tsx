import React from "react";

export type Author = {
  name: string;
  role: string;
  alternative?: string;
};
interface IProps {
  title: string;
  people: Author[];
}

const AuthorsSection = ({ title, people }: IProps) => {
  return (
    <div>
      <h4 className="font-serif uppercase">{title}</h4>
      <ul className="font-serif list-none">
        {people.map((person) =>
          person.name ? (
            <li key={person.name} className="grid grid-cols-2">
              <div>{person.name}</div>
              <div>{person.role}</div>
            </li>
          ) : (
            <li key={person.alternative}>{person.alternative}</li>
          )
        )}
      </ul>
    </div>
  );
};

export default AuthorsSection;
