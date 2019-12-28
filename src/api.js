const host = "http://localhost:5000/";
export function getUser(username) {
  return fetch(host + username)
    .then(r => {
      if (r.status === 500) return null;
      if (r.status !== 200) throw new Error("unexpected error");
      return r.json();
    })
    .then(user => {
      user.table.reverse();
      return user;
    });
}
