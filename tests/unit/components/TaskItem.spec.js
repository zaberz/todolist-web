import { shallowMount } from "@vue/test-utils";
import TaskItem from "@/components/TaskItem.vue";

describe("TaskItem.vue", () => {
  it("renders props.task", () => {
    const task = "new task";
    const wrapper = shallowMount(TaskItem, {
      propsData: { task }
    });
    expect(wrapper.find("span").text()).toMatch(task);
  });

  it("should emit change event", () => {
    const task = "new task";
    const wrapper = shallowMount(TaskItem, {
      propsData: { task }
    });
    wrapper.find("input").trigger("click");
    expect(wrapper.vm.isChecked).toBe(true);
    expect(wrapper.emitted("change")).toBeTruthy();
  });
});
