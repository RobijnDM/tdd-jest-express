const { User } = require("../../src/app/models");
const bcrypt = require("bcryptjs");
const truncate = require("../utils/truncate");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should encrypt user password", async () => {
    const user = await User.create({
      name: "Diego",
      email: "diego@test.com",
      password: "neki123@"
    });

    const hash = await bcrypt.hash("neki123@", 8);
    const compareHash = await bcrypt.compare("neki123@", user.password_hash);
    expect(compareHash).toBe(true);
  });
});
