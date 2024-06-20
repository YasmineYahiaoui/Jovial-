const user1 = {
  name: "yasmine",
  age: 25,
  admin: true,
  position: "etudiant",
};
const user2 = {
  name: "lydia",
  age: 24,
  admin: false,
  position: "trav",
};
function cheketudiant(user) {
  if (user.age > 10 && user.admin && user.position === "etudiant") {
    return "ok";
  }
}
console.log(cheketudiant(user1));
