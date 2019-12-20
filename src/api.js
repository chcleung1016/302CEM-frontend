import users from "./JSON/users.json";

export function getUser(username) {
  return users[username];
}
