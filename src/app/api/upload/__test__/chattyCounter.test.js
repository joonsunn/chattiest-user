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
  it("test string in chunks - user1", () => {
    const testString = `<user1> this is some chat words
<user1> more chat from me!
<user1> more chat from me!
This line is still attributed!`;
    const results = chattyCounter(testString);
    expect(results[0]).toStrictEqual({
      user: "user1",
      count: 18,
    });
  });
  it("test string in chunks - user2", () => {
    const testString = `
<user2> the sky is blue
This line is still attributed
This line is still attributed!
<user2> the sky is blue
This line is still attributed`;
    const results = chattyCounter(testString);
    expect(results[0]).toStrictEqual({
      user: "user2",
      count: 23,
    });
  });
  it("test string in chunks - user3", () => {
    const testString = `
<user3> this is some chat words 1
<user3> this is some chat words 2
<user3> this is some chat words 3`;
    const results = chattyCounter(testString);
    expect(results[0]).toStrictEqual({
      user: "user3",
      count: 18,
    });
  });
  it("total test", () => {
    const testString = `<user1> this is some chat words
<user2> the sky is blue
This line is still attributed
This line is still attributed!
<user1> more chat from me!
<user3> this is some chat words 1
<user3> this is some chat words 2
<user3> this is some chat words 3 lol
<user2> the sky is blue
This line is still attributed
<user1> more chat from me!
This line is still attributed!`;
    const results = chattyCounter(testString);
    expect(results[0]).toStrictEqual({
      user: "user2",
      count: 23,
    });
    expect(results[1]).toStrictEqual({
      user: "user3",
      count: 19,
    });
    expect(results[2]).toStrictEqual({
      user: "user1",
      count: 18,
    });
  });
  it("weird edge case", () => {
    const testString = `<user1> one two three
user1> five six
<user1 eight nine
<user2> one two three
<user3> one two three
user3> five six seven
<user1> ten`;
    const results = chattyCounter(testString);
    expect(results[0]).toStrictEqual({
      user: "user1",
      count: 10,
    });
    expect(results[1]).toStrictEqual({
      user: "user3",
      count: 7,
    });
    expect(results[2]).toStrictEqual({
      user: "user2",
      count: 3,
    });
  });
  it("weird edge case 2", () => {
    const testString = `infinity infinity <user1> user
<user1> one two three
user1> five six
<user1 eight nine
<user2> one two three
<user3> one two three
user3> five six seven
<user1> ten`;
    const results = chattyCounter(testString);
    expect(results[0]).toStrictEqual({
      user: "user1",
      count: 10,
    });
    expect(results[1]).toStrictEqual({
      user: "user3",
      count: 7,
    });
    expect(results[2]).toStrictEqual({
      user: "user2",
      count: 3,
    });
  });
});
