<template>
  <!-- 導覽列 -->
  <nav class="navbar">
    <router-link to="/" class="logo">我的網站</router-link>
    <ul class="nav-links">
      <li><router-link to="/">首頁</router-link></li>
      <li><router-link to="/logistics">物流專案</router-link></li>
      <li><router-link to="/shop">零食銷售網</router-link></li>
      <li><router-link to="/PracticeArea">Vue 練習區</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MainNavbar",
};
</script>

<style scoped>
/* padding 、margin數值順序，上（top） 右（right） 下（bottom） 左（left） */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 32px;
  background-color: #f8f8f8;
  border-bottom: 2px solid #ddd;
}

.logo {
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  color: black;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 30px;
  margin-right: 50px;
}

.nav-links li a {
  text-decoration: none;
  color: #333;
  font-weight: 600;
  font-size: 15px;
}

.nav-links li a:hover {
  color: #42b983;
}
</style>
