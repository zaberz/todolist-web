<template>
  <div class="">
    <input type="text" placeholder="请输入任务内容" v-model="task" />
    <button @click="add">添加</button>
  </div>
</template>

<script>
import { addTask } from "@/api/task";

export default {
  data: () => ({
    task: ""
  }),
  methods: {
    async add() {
      let res = await addTask(this.task);
      if (res) {
        this.$router.push({
          name: "home"
        });
      }
    }
  }
};
</script>
