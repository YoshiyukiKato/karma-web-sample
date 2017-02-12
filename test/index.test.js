import assert from "power-assert"
import { func } from "../src"

describe("test", () => {
  it("load html", () => {
    document.body.innerHTML = __html__["test/fixtures/index.test.html"];
    func();
    assert(document.querySelector("#message").innerText === "Hello World");
  });
});