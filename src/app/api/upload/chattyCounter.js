export const chattyCounter = (string) => {
  const userRegex = /^<(?<user>[\w\d]+)>?/gm;

  const testStringArray = string.trim().split(/\n/);
  let currentUser;
  let results = [];

  for (let i = 0; i < testStringArray.length; ++i) {
    const line = testStringArray[i].trim().split(" ");
    let userDetected = Array.from(
      testStringArray[i].trim().matchAll(userRegex)
    );
    if (userDetected.length > 0) {
      userDetected = userDetected[0].groups.user;
      currentUser = userDetected;
      const userToIncrement = results.find(
        (user) => user.user === userDetected
      );
      if (userToIncrement) {
        userToIncrement.count += line.length - 1;
        results = results.map((user) =>
          user.user === userDetected ? userToIncrement : user
        );
      } else {
        const userToIncrement = { user: userDetected, count: line.length - 1 };
        results.push(userToIncrement);
      }
    } else if (currentUser) {
      const userToIncrement = results.find((user) => user.user === currentUser);
      userToIncrement.count += line.length;
      results = results.map((user) =>
        user.user === userDetected ? userToIncrement : user
      );
    }
  }

  results.sort((a, b) => b.count - a.count);

  return results;
};
