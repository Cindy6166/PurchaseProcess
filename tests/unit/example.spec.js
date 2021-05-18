import { shallowMount } from "@vue/test-utils";
// import HelloWorld from "@/components/HelloWorld.vue";
import CheckOut from "@/views/CheckOut.vue";

// describe("HelloWorld.vue", () => {
//   it("renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg },
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });

describe("CheckOut", () => {
  it("renders successfully", () => {
    const wrapper = shallowMount(CheckOut, { mocks: { $t: (msg) => msg } });
  });
});
