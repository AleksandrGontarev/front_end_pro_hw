const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

function generateKey(length, characters) {
  let str = "";
  for (let i=0; i < length; i++) {
    str += characters[Math.floor(Math.random() * characters.length)];
  }
  return str;
}

const key = generateKey(10, characters);
console.log(key); 