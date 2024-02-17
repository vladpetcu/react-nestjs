import React, { useEffect } from "react";

import { useUsers } from "./useUsers/useUsers";
import { CreateUserDto } from "@react-nestjs/common";
import { useForm } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const createUserResolver = classValidatorResolver(CreateUserDto);

export const Users = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateUserDto>({
    resolver: createUserResolver, // Validate form data before submitting
    shouldFocusError: false,
  });
  const { users, loading, createUser, loadUsers } = useUsers();

  useEffect(() => {
    loadUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCreate = async (createUserDto: CreateUserDto) => {
    await createUser(createUserDto);
    reset();
  };

  return (
    <div>
      <div className="text-green-600">Users</div>
      <div>
        <form onSubmit={handleSubmit(onCreate)}>
          <div className="flex flex-col justify-center gap-1.5">
            <TextField
              label="Name"
              variant="outlined"
              {...register("name", { required: true })}
              error={Boolean(errors.name)}
              helperText={errors.name && "Name is required, min chars 4"}
            />
            <TextField
              label="Email"
              variant="outlined"
              {...register("email", { required: true })}
              error={Boolean(errors.email)}
              helperText={errors.email && "Email is required, valid format"}
            />
            <Button
              className="max-w-fit"
              variant="contained"
              type="submit"
              disabled={loading}
            >
              Create User
            </Button>
          </div>
        </form>
      </div>
      {loading ? (
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
