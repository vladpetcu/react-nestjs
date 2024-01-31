import React, { useEffect } from "react";

import { useCats } from "./useCats/useCats";

export const Cats = () => {
  const { cats, loadCats } = useCats();

  useEffect(() => {
    loadCats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>Cats</div>
      {!cats.length ? (
        <div>Loading...</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Breed</th>
            </tr>
          </thead>
          <tbody>
            {cats.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.id}</td>
                <td>{cat.name}</td>
                <td>{cat.age}</td>
                <td>{cat.breed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
