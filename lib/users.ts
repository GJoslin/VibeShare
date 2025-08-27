type User = { username: string; email: string; password: string; age: number };
let user1: User[] = [];

export function createUser(username: string, email: string, password: string, age: number) {
  if (age < 18) throw new Error("Must be 18+ to sign up.");
  if (user1.find(u => u.username === username)) throw new Error("Username already exists.");
  const user = { username, email, password, age };
  user1.push(user);
  return user;
}

export function findUser(username: string, password: string) {
  return user1.find(u => u.username === username && u.password === password);
}
export function findUserByUsername(username: string) {
  return user1.find((u) => u.username === username) || null;
}

// lib/users.ts

export type UserMock = {
  username: string;
  email: string;
  password: string;
  ageConfirmed: boolean;
};

export const users: UserMock[] = [
  {
    username: "Joslin",
    email: "joslin@example.com",
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
