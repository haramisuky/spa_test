<template>
  <div class="header">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1"> <RouterLink to="/">Home</RouterLink></el-menu-item>
    <el-menu-item index="2"><RouterLink to="/about">About</RouterLink></el-menu-item>
    <el-submenu index="3">
      <template slot="title">Contents</template>
      <el-menu-item index="2-1">Blog</el-menu-item>
      <el-menu-item index="2-2">Work</el-menu-item>
    </el-submenu>
  </el-menu>
<div class="line"></div>
<br />

</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

