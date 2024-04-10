import { chattyCounter } from "../chattyCounter";

describe("first test", () => {
  it("one user", () => {
    const testString = "<user1> hello world";
    expect(chattyCounter(testString)).toStrictEqual([
      { user: "user1", count: 2 },
    ]);
  });
  it("two users", () => {
    const testString = `<user1> hello world
    <user2> hello world lol`;
    const results = chattyCounter(testString);
    expect(results.length).toBe(2);
    expect(results[0]).toStrictEqual({
      user: "user2",
      count: 3,
    });
  });
  it("three users", () => {
    const testString = `<user1> hello world
    <user2> hello world lol
    <user3> hello world lol haha haha`;
    const results = chattyCounter(testString);
    expect(results.length).toBe(3);
    expect(results[0]).toStrictEqual({
      count: 5,
      user: "user3",
    });
  });
  it("multiline messages", () => {
    const testString = `<user1> hello world
    teehee this is another line
    <user2> hello world lol
    <user3> hello world lol haha haha`;
    const results = chattyCounter(testString);
    expect(results[0]).toStrictEqual({
      user: "user1",
      count: 7,
    });
  });
  it("punctuation marks", () => {
    const testString = `<user1> hello world
    teehee this is another line! By the way...
    <user2> hello world lol
    <user3> hello world lol haha haha`;
    const results = chattyCounter(testString);
    expect(results[0]).toStrictEqual({
      user: "user1",
      count: 10,
    });
  });
  it("numbers in messages", () => {
    const testString = `<user1> hello world
    teehee 1 2 3 4 123 567 888 1234567890
    <user2> hello world lol
    <user3> hello world lol haha haha`;
    const results = chattyCounter(testString);
    expect(results[0]).toStrictEqual({
      user: "user1",
      count: 11,
    });
  });
});
