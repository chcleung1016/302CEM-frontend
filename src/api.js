import users from "./Json/users.json";

export function getUser(username) {
  return users[username];
}
