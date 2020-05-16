const assert = require("assert");
const BankAccount = require("../app/BankAccount");

let originalAccount = new BankAccount(100.0, []);

describe("BankAcc", () => {
  describe("#current", () => {
    it("should return the account's balance", () => {
      assert.deepEqual(100.0, originalAccount.current());
    });
  });

  describe("#append-positive", () => {
    let amount = 666.66;
    it("should append ammount to  the account's balance", () => {
      assert.deepEqual(766.66, originalAccount.append(amount));
    });
  });

  describe("#append-negative", () => {
    let amount = -1;
    it("should notappend ammount to  the account's balance", () => {
      assert.deepEqual(100.0, originalAccount.append(amount));
    });
  });

  describe("#substract-positive", () => {
    let amount = 25.32;
    it("should substract ammount to  the account's balance", () => {
      assert.deepEqual(74.68, originalAccount.substract(amount));
    });
  });

  describe("#substract-negative", () => {
    let amount = 101;
    it("should substract ammount to  the account's balance", () => {
      assert.deepEqual(100, originalAccount.substract(amount));
    });
  });

  describe("#merge-positive", () => {
    let newAccount = new BankAccount(100.0, [
      { action: "substract 100", time: "date", result: "success" },
    ]);
    it("should merge two accounts", () => {
      assert.deepEqual(200, originalAccount.merge(newAccount));
    });
  });

  describe("#merge-negative", () => {
    let newAccount = new BankAccount(-200.0, [
      { action: "substract 100", time: "date", result: "success" },
    ]);
    it("should merge two accounts", () => {
      assert.deepEqual(-100, originalAccount.merge(newAccount));
    });
  });

  describe("#history", () => {
    it("get account movements", () => {
      assert.equal(
        [
          { action: "get balance", time: "date", result: "success" },
          { action: "append 666.66", time: "date", result: "success" },
          { action: "append -1", time: "date", result: "error" },
          { action: "substract 25.32", time: "date", result: "success" },
          { action: "substract 101", time: "date", result: "error" },
          { action: "merge", time: "date", result: "success" },
          { action: "merge", time: "date", result: "success" },
        ],
        originalAccount.getHistory()
      );
    });
  });
});
