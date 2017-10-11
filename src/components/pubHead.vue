<template>
  <div class="pubHead">
    <div class="head">
        <a href="javascript:;" class="logo">中国吉林</a>
        <h3>智慧城市运行管理监控指标体系示例</h3>
        <a href="javascript:;" class="login_register">登录/注册</a>
    </div>
    <div class="nav">
        <ul>
            <li><a href="javascript:;">经济运行指标</a></li>
            <li><a href="javascript:;">资源与环境保障指标</a></li>
            <li><a href="javascript:;">交通运行指标</a></li>
            <li><a href="javascript:;">基础设施指标</a></li>
            <li><a href="javascript:;">社会安全指标</a></li>
            <li><a href="javascript:;">人文环境建设指标</a></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pubHead',
  data () {
    return {
      msg: '交通设施建设'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul, ol {
    list-style: none;
  }
  a, a:link, a:visited {
    text-decoration: none;
    color: #333333;
  }
  .pubHead {
    font-size: 18px;
  }
  .head {
    height: 100px;
    line-height: 100px;
    padding: 0 100px;
    position: relative;
  }
  .head .logo {
    font-size: 30px;
    font-weight: 500;
    position: absolute;
    left: 100px;
  }
  .head h3 {
    font-size: 18px;
    color: #333333;
    margin: 0;
  }
  .head .login_register {
    position: absolute;
    right: 100px;
    top: 0;
  }
  .nav ul {
    overflow: hidden;
    margin: 0 auto;
  }
  .nav li {
    float: left;
    text-align: center;
  }
  .nav li a {
    display: block;
    padding: 0 20px;
  }
</style>
