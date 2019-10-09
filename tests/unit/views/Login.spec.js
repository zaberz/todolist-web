import { shallowMount } from "@vue/test-utils";
import Login from "@/views/Login.vue";
import sinon from "sinon";
describe("Login.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(Login, {});

    wrapper.find(".js-login").trigger("click");
    const stub = sinon.stub(); // 伪造一个jest的mock funciton

    wrapper.setMethods({ login: stub }); // setMethods将loginToDo这个方法覆写

    expect(stub).toBeCalled(); // 查看loginToDo是否被调用
  });
});
