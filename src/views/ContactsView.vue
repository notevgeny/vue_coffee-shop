<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <navbar-component />
          </div>
        </div>
        <page-title :text="text" />
      </div>
    </div>
    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img
              class="beanslogo mt-5"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />

            <form @submit.prevent="submit" action="#" class="mt-5">
              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="name-input" class="mb-0">
                    Name
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    id="name-input"
                    v-model="v$.name.$model"
                  />
                  <span v-for="error in v$.name.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="email-input" class="mb-0">
                    E-mail
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    type="email"
                    class="form-control"
                    id="email-input"
                    v-model="v$.email.$model"
                  />
                  <span v-for="error in v$.email.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="phone-input" class="mb-0"> Phone </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    type="tel"
                    class="form-control"
                    id="phone-input"
                    v-model.number="v$.phone.$model"
                  />
                  <span v-for="error in v$.phone.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row textarea">
                <div class="col col-12 d-flex justify-content-start">
                  <label for="pmessage" class="mb-3 mt-3 text-center">
                    {{ message }}
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12">
                  <textarea
                    class="form-control"
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Leave your comments here"
                    v-model.trim="v$.message.$model"
                  ></textarea>
                  <span v-for="error in v$.message.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  v-model="v$.terms.$model"
                  @change="v$.terms.$touch"
                />
                <label for="terms">Согласен с договором оферты</label>
                <span v-for="error in v$.terms.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
              </div>

              <div class="row">
                <div class="col">
                  <button type="submit" class="btn btn-outline-dark send-btn">
                    Send us
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import ProductItem from "@/components/ProductItem.vue";
import PageTitle from "@/components/PageTitle.vue";

import useVuelidate from "@vuelidate/core";
import { helpers } from "@vuelidate/validators";
import { required, email, maxLength, sameAs } from "@vuelidate/validators";
import minLength from "../validators/minLength";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      name: { required },
      email: { required, email },
      phone: {},
      
      message: {
        required,
        maxLength: maxLength(20),
        minLength: helpers.withMessage(
          "This message must be more 5 chars",
          minLength
        ), 
      },

      terms: {
        sameAs: helpers.withMessage(
          "Press YES", sameAs(true)),
      },

    };
  },
  components: { NavbarComponent, ProductItem, PageTitle },
  data() {
    return {
      text: "Contact us",
      name: "",
      email: "",
      phone: "",
      message: "",
      terms: true
    };
  },
  methods: {
    async submit() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
      
      let messageForm = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
        terms: this.terms
      }

      fetch('http://localhost:3000/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(messageForm)
      })
      this.resetForm();
    },
    resetForm(){
      this.name = ''
      this.email = '',
      this.phone = '',
      this.message = ''  
    }
  },
};
</script>