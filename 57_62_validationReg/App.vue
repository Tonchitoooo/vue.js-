<template>
<div class="container">
  <form class="pt-3" @submit.prevent="onSubmit">
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        class="form-control"
        :class="{'is-invalid' : $v.email.$error}"
        @blur="$v.email.$touch()"
        v-model="email">
      <div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
      <div class="invalid-feedback" v-if="!$v.email.email">This field shoud be an email</div>
      <div class="invalid-feedback" v-if="!$v.email.uniqEmail">
        This email is already exist</div>
    </div>

    <div class="form-group">
      <label for="password">Psaaword</label>
      <input
        type="password"
        id="password"
        class="form-control"
        :class="{'is-invalid' : $v.password.$error}"
        @blur="$v.password.$touch()"
        v-model="password">
      <div class="invalid-feedback" v-if="!$v.password.minLength">
        Min lenght of password is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}.</div>
    </div>

    <div class="form-group">
      <label for="confirmPassword">Confirm password</label>
      <input
        type="password"
        id="confirmPassword"
        class="form-control"
        :class="{'is-invalid' : $v.confirmPassword.$error}"
        @blur="$v.confirmPassword.$touch()"
        v-model="confirmPassword">
      <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">
        password shoud match.</div>
    </div>

    <button
      class="btn btn-success"
      type="submit"
      :disabled="$v.$invalid"
    >submit</button>
  </form>
</div>

</template>

<script>
  import { required, email, minLength, sameAs} from 'vuelidate/lib/validators'

  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword:''
      }
    },
    methods: {
      onSubmit () {
        console.log('Email', this.email)
        console.log('Password', this.password)
      }
    },
    validations: {
      email: {
        required,
        email,
        // симулируем запрос пароля в БД
        uniqEmail: function (newEmail) {
          if (newEmail === '') return true

          return new Promise((resolve, reject) => {
            setTimeout(() => {
              const value = newEmail !== 'test@mail.ru'
              resolve(value)
            }, 1000)
          })
        }
      },
      password: {
        minLength: minLength(6)
      },
      confirmPassword: {
        sameAs: sameAs((vue) => {
          return vue.password
        })
      }
    }
  }
</script>
