const string = `<user1> this is some chat words
<user2> the sky is blue
This line is still attributed
This line is still attributed!
<user1> more chat from me!
<user3> this is some chat words 1
<user3> this is some chat words 2
<user3> this is some chat words 3
<user2> the sky is blue
This line is still attributed
<user1> more chat from me!
This line is still attributed!`;

// console.log(string);

const regex = /^<(?<user>\w+)>\s(?<message>[\w\s\d!.?:'"{}\[\]]+)$/gm;

const foundMatch = string.matchAll(regex);
// const matchArray = Array.from(foundMatch);

// console.log(matchArray);

// const results = {};

// for (const match of foundMatch) {
//   const user = match.groups.user;
//   const message = match.groups.message.replace("\n", " ").split("");
//   if (results[user]) {
//     results[user] += message.length;
//   } else {
//     results[user] = message.length;
//   }
// }

let results = [];

for (const match of foundMatch) {
  const user = match.groups.user;
  const message = match.groups.message.replace("\n", " ").split("");
  const userToAdd = results.find((item) => item.user === user);
  if (userToAdd) {
    userToAdd.count += message.length;
    results = results.filter((item) => item.user !== user);
    results.push(userToAdd);
  } else {
    results.push({ user, count: message.length });
  }
}

results.sort((a, b) => b.count - a.count);

console.log(results);
