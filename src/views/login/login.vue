<template>
  <div class="login-wrap">
    <div class="login-form">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
        label-position="left"
      >

        <div class="title-container">
          <h3 class="title">Login Form</h3>
        </div>

        <el-form-item prop="user">
          <el-input
            v-model.number="ruleForm.user"
            placeholder="用户名"
          ></el-input>
        </el-form-item>

        <el-form-item prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-col :span="24">
            <el-button
              :style="{width:'100%'}"
              type="primary"
              @click="submitForm('ruleForm')"
            >提交</el-button>
          </el-col>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {

    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };

    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    // 校验用户名
    const checkUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    }
    // 校验密码
    const checkPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    }
    return {
      ruleForm: {
        pass: '',
        user: ''
      },
      rules: {
        pass: [
          { validator: checkPass, trigger: 'blur' }
        ],
        user: [
          { validator: checkUser, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 将token写到vuex
          this.$store.dispatch('user/login', 'mdd-user')
          localStorage.setItem('token', 'mdd-user')
          this.$router.push('/home');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style lang="scss" scoped>
// $bg: orange;
$bg: white;

.login-wrap {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    background-color: $bg;
    .title-container {
      position: relative;

      .title {
        font-size: 26px;
        // color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }
  }
}
</style>