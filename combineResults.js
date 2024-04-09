const results = [
  [
    { user: "user2", count: 121 },
    { user: "user1", count: 90 },
    { user: "user3", count: 75 },
  ],
  [
    { user: "user2", count: 121 },
    { user: "user1", count: 90 },
    { user: "user3", count: 75 },
  ],
];

const combinedResults = results.flat();

console.log(combinedResults);
