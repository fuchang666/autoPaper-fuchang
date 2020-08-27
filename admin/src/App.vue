<template>
  <div id="app">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider v-model="collapsed" collapsible>
        <div class="logo" />
        <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="user" /><span>用户管理</span></span>
            <a-menu-item key="1">
              学生列表
            </a-menu-item>
            <a-menu-item key="2">
              老师列表
            </a-menu-item>
            <a-menu-item key="3">
              批量导入
            </a-menu-item>
            <a-menu-item key="4">
              发布通知
            </a-menu-item>
            <a-menu-item key="5">
              审核注册
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="user" /><span>课程管理</span></span>
            <a-menu-item key="6">
              课程列表
            </a-menu-item>
            <a-menu-item key="7">
              批量导入
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title"><a-icon type="user" /><span>课程组管理</span></span>
            <a-menu-item key="8">
              课程组列表
            </a-menu-item>
            <a-menu-item key="9">
              批量导入
            </a-menu-item>
            <a-menu-item key="10">
              审核加入
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="11">
            <a-icon type="pie-chart" />
            <span>班级管理</span>
          </a-menu-item>
          <a-menu-item key="12">
            <a-icon type="pie-chart" />
            <span>专业管理</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>

      <a-layout>
        <a-layout-header style="background: #fff; padding: 0" />
        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>User</a-breadcrumb-item>
            <a-breadcrumb-item>Bill</a-breadcrumb-item>
          </a-breadcrumb>
          <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
            <router-view></router-view>
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        collapsed: false,
      };
    },
  };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
