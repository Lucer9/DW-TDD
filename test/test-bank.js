const assert = require("assert");
const BankAccount = require("../app/BankAccount");

let originalAccount = new BankAccount(100, []);

describe("BankAcc", () => {
  describe("#current", () => {
    it("should return the account's balance", () => {
      assert.deepEqual(100, originalAccount.current());
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
      assert.deepEqual(766.66, originalAccount.append(amount));
    });
  });

  describe("#substract-positive", () => {
    let amount = 25;
    it("should substract ammount to  the account's balance", () => {
      assert.deepEqual(741.66, originalAccount.substract(amount));
    });
  });

  describe("#substract-negative", () => {
    let amount = 1000;
    it("shouldn't substract ammount to  the account's balance", () => {
      assert.deepEqual(741.66, originalAccount.substract(amount));
    });
  });

  describe("#merge-positive", () => {
    let newAccount = new BankAccount(100.0, [
      { action: "substract 100", time: 22, result: "success" },
    ]);
    it("should merge two accounts", () => {
      assert.deepEqual(841.66, originalAccount.merge(newAccount));
    });
  });

  describe("#merge-negative", () => {
    let newAccount = new BankAccount(-941.66, [
      { action: "substract 100", time: 23, result: "success" },
    ]);
    it("should merge two accounts", () => {
      assert.deepEqual(-100, originalAccount.merge(newAccount));
    });
  });

  describe("#history", () => {
    it("get account movements", () => {
      assert.deepEqual(
        [
          { action: "get balance", time: 1, result: "success" },
          { action: "append 666.66", time: 2, result: "success" },
          { action: "append -1", time: 3, result: "error" },
          { action: "substract 25", time: 4, result: "success" },
          { action: "substract 1000", time: 5, result: "error" },
          { action: "merge", time: 6, result: "success" },
          { action: "merge", time: 7, result: "success" },
          { action: "substract 100", time: 22, result: "success" },
          { action: "substract 100", time: 23, result: "success" },
        ],
        originalAccount.getHistory()
      );
    });
  });
});
