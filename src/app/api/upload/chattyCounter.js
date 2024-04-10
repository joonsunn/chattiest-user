export const chattyCounter = (string) => {
  const regex = /<(?<user>\w+)>\s(?<message>[\w\s\d!.?:'"{}\[\]]+)/gm;

  const foundMatch = string.matchAll(regex);

  let results = [];

  for (const match of foundMatch) {
    const user = match.groups.user;
    const messageUnfiltered = match.groups.message.split(/[\s\n]/gim);
    const message = messageUnfiltered.filter((item) => item !== "");
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

  return results;
};

// const string = `<user1> hello world
// <user2> hello world lol`;

// console.log(chattyCounter(string));
