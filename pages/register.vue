
<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <VeeForm class="space-y-6" :state="formState" :validation-schema="schema" @submit="onSubmit">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <VeeField id="email" name="email" v-model="formState.email" type="email"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            <VeeErrorMessage name="email" class="text-red-500"/>
          </div>
        </div>
        <div>
          <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <div class="mt-2">
            <VeeField id="name" name="name" v-model="formState.name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            <VeeErrorMessage name="name" class="text-red-500"/>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <VeeField id="password" name="password" v-model="formState.password" type="password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            <VeeErrorMessage name="password" class="text-red-500"/>
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </VeeForm>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
    layout: 'default'
})
import * as yup from 'yup';

const schema =
  yup.object({
    email: yup.string().email().required(),
    name: yup.string().required().max(15),
    password: yup.string().min(8).required()
  }) 

type Schema = InferType<typeof schema>

const { handleSubmit, values } = useForm({
  validationSchema: schema,
});

const formState = reactive({
  email: undefined,
  name: undefined,
  password: undefined
})

async function onSubmit(){

  try {  
    await $fetch("/api/auth/register", {
          method: 'POST',
          body: { 'name': formState.name , 'email': formState.email, 'password': formState.password}
      }
    )
    
  } catch (error) {
    
  }
}
</script>