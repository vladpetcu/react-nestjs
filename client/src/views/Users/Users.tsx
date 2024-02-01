import React, { useEffect } from "react";

import { useUsers } from "./useUsers/useUsers";
import { CreateUserDto } from "@react-nestjs/common";
import { useForm } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

const createUserResolver = classValidatorResolver(CreateUserDto);

export const Users = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserDto>({
    resolver: createUserResolver, // Validate form data before submitting
    shouldFocusError: false,
  });
  const { users, createUser, loadUsers } = useUsers();

  useEffect(() => {
    loadUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>Users</div>
      <div>
        <form onSubmit={handleSubmit(createUser)}>
          <input {...register("name", { required: true })} />
          {errors.name && <p>Name is required, min chars 4.</p>}
          <input {...register("email", { required: true })} />
          {errors.email && <p>Email is required, valid format.</p>}
          <input type="submit" />
        </form>
      </div>
      {!users.length ? (
        <div>Loading...</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Cats</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.cats.map((cat) => cat.name).join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
