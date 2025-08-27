type User = { username: string; email: string; password: string; age: number };
let users: User[] = [];

export function createUser(username: string, email: string, password: string, age: number) {
  if (age < 18) throw new Error("Must be 18+ to sign up.");
  if (users.find(u => u.username === username)) throw new Error("Username already exists.");
  const user = { username, email, password, age };
  users.push(user);
  return user;
}

export function findUser(username: string, password: string) {
  return users.find(u => u.username === username && u.password === password);
}
export function findUserByUsername(username: string) {
  return users.find((u) => u.username === username) || null;
}

// lib/users.ts

export type User = {
  username: string;
  email: string;
  password: string;
  ageConfirmed: boolean;
};

export const users: User[] = [
  {
    username: "john_doe",
    email: "john@example.com",
    password: "123456", // mock password (not secure)
    ageConfirmed: true,
  },
  {
    username: "jane_doe",
    email: "jane@example.com",
    password: "abcdef",
    ageConfirmed: false,
  },
];
