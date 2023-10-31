<template>
    <b-form @submit="submitForm" @reset="resetForm">
      <b-form-group label="Name:" label-for="name">
        <b-form-input id="name" v-model="formData.name" required />
      </b-form-group>
  
      <b-form-group label="Email:" label-for="email">
        <b-form-input type="email" id="email" v-model="formData.email" required />
      </b-form-group>
  
      <b-form-group label="Company (Optional):" label-for="company">
        <b-form-input id="company" v-model="formData.company" />
      </b-form-group>
  
      <b-form-group label="Country Code:" label-for="countryCode">
        <b-form-input id="countryCode" v-model="formData.countryCode" required />
      </b-form-group>
  
      <b-form-group label="Phone Number:" label-for="phoneNumber">
        <b-form-input id="phoneNumber" v-model="formData.phoneNumber" required />
      </b-form-group>
  
      <b-form-group label="Message:" label-for="message">
        <b-form-textarea id="message" v-model="formData.message" required />
      </b-form-group>
  
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                company: '',
                countryCode: '',
                phoneNumber: '',
                message: '',
            },
        };
    },
    methods: {
        async submitForm() {
            try {
                const response = await axios.post('https://127.0.0.1:8000/submit', this.formData);
                // Handle the response here (e.g., show a success message or navigate to a thank you page).
            } catch (error) {
                console.error('Error submitting the form:', error);
            }
        },
    },
}
</script>
