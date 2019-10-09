<template>
  <div class="home">
    <task-item
      v-for="(task, index) in list"
      :task="task.content"
      :time="task.time"
      :key="index"
      @change="removeTask(task)"
    ></task-item>
    <router-link to="add">添加</router-link>
  </div>
</template>

<script>
import TaskItem from "@/components/TaskItem";
import { getTasks } from "@/api/task";

export default {
  name: "home",
  components: {
    TaskItem
  },
  data: () => {
    let list = [];
    return {
      list
    };
  },
  async mounted() {
    this.initTaskList();
  },
  methods: {
    async initTaskList() {
      const taskList = await getTasks();
      this.list = taskList;
    },
    removeTask() {}
  }
};
</script>
