<template>
<v-app>
   <v-container fluid>
<v-layout row>
<v-flex xs4 offset-xs4>

  <div class="white elevation-2">
    <v-toolbar flat dense class="teal" dark>
      <v-toolbar-title class="white--text">ClientRegister</v-toolbar-title>
      </v-toolbar>      
    
       <v-text-field
          name="input-1"
          label="Name:"
          prepend-icon="person"   
          v-model="name"
         
          ></v-text-field>

          <v-text-field
          name="input-1"
          label="Phone:"        
          prepend-icon="phone"
          v-model="phone"
          ></v-text-field>
          

          <v-text-field
          name="input-1"
          label="Email:"
          v-model="email"
          prepend-icon="mail"          
          ></v-text-field>

          <template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" scrollable max-width="300px">
      <v-btn slot="activator" color="primary" dark>Open Dialog</v-btn>
      <v-card>
        <v-card-title>Select Country</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-radio-group  column>
            <v-checkbox   label="provider1" v-model="provider"  value="provider1"  ></v-checkbox>
            <v-checkbox   label="provider2" v-model="provider" value="provider2" ></v-checkbox>
            <v-checkbox   label="provider3" v-model="provider" value="provider3" ></v-checkbox>
            <v-checkbox   label="provider4" v-model="provider" value="provider4" ></v-checkbox>
            <v-checkbox   label="provider5" v-model="provider" value="provider5" ></v-checkbox>
               
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
   
          <v-btn  dark          
          class="teal"
          @click="client"          
          input="required"      
           >CreateClient</v-btn>
      </div>
       
  </v-flex>
  </v-layout>
</v-container>
</v-app>
</template>

<script>
import ClientService from '@/Services/ClientService'

export default {
 
  data: function () {
    return {
        provider:[],       
        dialog: false,      
        name:'',
        email:'',
        phone:''

    }
  },
   methods:{
    client() {
       var response=ClientService.client({
           name:this.name,
           email:this.email,
           phone:this.phone,
           provider:this.provider
       })
        this.$router.push({
            name:'Client'
        })
    }
  }
}
</script>

<style scoped>

</style>