<template >
    <div class="out">
    <form novalidate class="md-layout "@submit.prevent="handleSubmit">
      <md-card class="md-layout-item md-size-50 md-small-size-100 bg-grey rounded">
        <md-card-content> 
          <md-text  style="font-size:xx-large ;padding:10px" ><center>SignUp</center></md-text>
        <md-field>
          <label>email</label>
          <md-input v-model="postData.name"></md-input>
        </md-field>
    
        <md-field>
          <label>Password</label>
          <md-input v-model="postData.plf"></md-input>
        </md-field>
    
       
        <md-button type="submit" v-on:click="submitData()" class="md-raised md-primary" >Submit</md-button>
           </md-card-content>
      </md-card></form>
    </div>
    

    </template>

    <style>
    .out{
          min-height: 100vh;  
          background-size:     cover;
      background-image: url("https://drmcet.ac.in/wp-content/uploads/2022/05/slider1.jpg"); }
    
      
      .md-card{
        margin-top: 8%;
        margin-left: 25%;
        
    }
    </style>