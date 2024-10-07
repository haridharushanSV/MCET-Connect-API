
<template>
  <div class="outi">
    <form novalidate class="md-layout " @submit.prevent="handleSubmit">
    <md-card class="md-layout-item md-size-50 md-small-size-100 bg-grey rounded">
      <md-card-content> 
        <md-text style="font-size:xx-large ;padding:10px"><center>AM I CLEAN</center></md-text>
      <md-field>
        <label>Name</label>
        <md-input v-model="postData.name"></md-input>
      </md-field>
  
      <md-field>
        <label>PLF No</label>
        <md-input v-model="postData.plf"></md-input>
      </md-field>
  
      <md-field>
        <label>DESCRIPTION</label>
        <md-input v-model="postData.des"></md-input>
      </md-field>
  
     
      <md-button type="submit" v-on:click="submitData()" class="md-raised md-primary" >Submit</md-button>
         </md-card-content>
    </md-card></form>
   
  
  </div>
  </template>
  <style>
  .outi{
    min-height: 100vh; 
    background-image: url("https://drmcet.ac.in/wp-content/uploads/2022/05/slider1.jpg"); 
     background-size:     cover;                      /* <------ */
     }
.md-card{
      margin-top: 8%;
      margin-left: 25%;
      
  }
      
  
  </style>
  <script>
    
  export default {
    name: 'FormValidation',
    data: () => ({
     
      postData: {
        name: '',
        plf: '',
        des:'',
        
      }
     
    }),
    methods: {
      handleSubmit() {
      // Your form submission logic here
      // e.g., making an API call
      this.submitFormData().then(() => {
        this.$router.go(0);
      });
    },
    submitFormData() {
      // Example function to simulate form data submission
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    },
       submitData() {
      const apiUrl = 'http://127.0.0.1:8000/api/amiclean/';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.postData)
      };

      fetch(apiUrl, options)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Data received:', data);
     
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
         
        });
    },
    }
  }
</script>
  
     