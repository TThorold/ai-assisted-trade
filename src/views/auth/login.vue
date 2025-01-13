<script setup>
import { useTheme } from 'vuetify'
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import logo from '@images/logo.svg?raw'
import authV1MaskDark from '@images/pages/auth-v1-mask-dark.png'
import authV1MaskLight from '@images/pages/auth-v1-mask-light.png'
import authV1Tree2 from '@images/pages/auth-v1-tree-2.png'
import authV1Tree from '@images/pages/auth-v1-tree.png'
import authApi from '@/api/auth.js'
import {cloneDeep} from "lodash";
import { afterLogin } from '@/views/auth/util.js'

const form = ref({
  phone: '18810423694',
  password: '111222ab',
  type: 'student',
  remember: false,
})

const vuetifyTheme = useTheme()

const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? authV1MaskLight : authV1MaskDark
})

const login = () => {
  const formDataParam = cloneDeep(form.value)
  authApi.getToken(formDataParam).then(res => {
    afterLogin(res.token)
  })
}

const isPasswordVisible = ref(false)
</script>

<template>
  <div class='auth-wrapper d-flex align-center justify-center pa-4'>
    <VCard
      class='auth-card pa-4 pt-7'
      max-width='448'
    >
      <VCardItem class='justify-center'>
        <RouterLink
          to='/'
          class='d-flex align-center gap-3'
        >
          <!-- eslint-disable vue/no-v-html -->
          <div
            class='d-flex'
            v-html='logo'
          />
          <h2 class='font-weight-medium text-2xl text-uppercase'>
            Materio
          </h2>
        </RouterLink>
      </VCardItem>

      <VCardText class='pt-2'>
        <h4 class='text-h4 mb-1'>
          Welcome to Materio! 👋🏻
        </h4>
        <p class='mb-0'>
          Please sign-in to your account and start the adventure
        </p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent='() => {}'>
          <VRow>
            <!-- email -->
            <VCol cols='12'>
              <VTextField
                v-model='form.phone'
                label='手机号'
              />
            </VCol>

            <!-- password -->
            <VCol cols='12'>
              <VTextField
                v-model='form.password'
                label='密码'
                placeholder='············'
                :type="isPasswordVisible ? 'text' : 'password'"
                autocomplete='password'
                :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                @click:append-inner='isPasswordVisible = !isPasswordVisible'
              />

              <!-- remember me checkbox -->
              <div class='d-flex align-center justify-space-between flex-wrap my-6'>
                <VCheckbox
                  v-model='form.remember'
                  label='Remember me'
                />

                <a
                  class='text-primary'
                  href='javascript:void(0)'
                >
                  Forgot Password?
                </a>
              </div>

              <!-- login button -->
              <VBtn
                block
                type='submit'
                @click='login'
              >
                Login
              </VBtn>
            </VCol>

            <!-- create account -->
            <VCol
              cols='12'
              class='text-center text-base'
            >
              <span>New on our platform?</span>
              <RouterLink
                class='text-primary ms-2'
                to='/register'
              >
                Create an account
              </RouterLink>
            </VCol>

            <VCol
              cols='12'
              class='d-flex align-center'
            >
              <VDivider />
              <span class='mx-4'>or</span>
              <VDivider />
            </VCol>

            <!-- auth providers -->
            <VCol
              cols='12'
              class='text-center'
            >
              <AuthProvider />
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>

    <VImg
      class='auth-footer-start-tree d-none d-md-block'
      :src='authV1Tree'
      :width='250'
    />

    <VImg
      :src='authV1Tree2'
      class='auth-footer-end-tree d-none d-md-block'
      :width='350'
    />

    <!-- bg img -->
    <VImg
      class='auth-footer-mask d-none d-md-block'
      :src='authThemeMask'
    />
  </div>
</template>

<style lang='scss'>
@use "@core/scss/template/pages/page-auth";
</style>
