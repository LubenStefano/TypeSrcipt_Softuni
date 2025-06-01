type User = {
  id: number | string;
  username: string;
  passwordHash: string | string[];
  status: "Locked" | "Unlocked" | "Deleted";
  email?: string;
};

function ValidateUser(user: User): boolean {
  if (
    ((typeof user.id === "number" && user.id > 100) ||
      (typeof user.id === "string" && user.id.length === 14)) &&
    typeof user.username === "string" &&
    user.username.length >= 5 &&
    user.username.length <= 10 &&
    ((typeof user.passwordHash === "string" &&
      user.passwordHash.length === 20) ||
      (Array.isArray(user.passwordHash) &&
        user.passwordHash.length === 4 &&
        user.passwordHash.every(
          (pw) => typeof pw === "string" && pw.length === 8
        ))) &&
    (user.status === "Locked" || user.status === "Unlocked")
  ) {
    return true;
  }

  return false;
}

console.log(ValidateUser({ id: 120, username: 'testing', passwordHash: '123456-123456-123456',

status: 'Deleted', email: 'something' }));
