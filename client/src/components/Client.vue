<template>
<v-app>
  <div>
    <v-dialog v-model="dialog1" max-width="500px">
    
    <v-btn slot="activator" to="CreateClient" color="primary"  dark class="mb-2"> Add New Client</v-btn>
    </v-dialog>
    <v-dialog v-model="dialog" max-width="500px">      
      <v-card>
        <v-card-title>
          <span class="headline"></span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="edit.name" label="Client Name"></v-text-field>
              </v-flex>             
               <v-flex xs12 sm6 md4>
                <v-text-field v-model="edit.phone" label="Client Phone"></v-text-field>
              </v-flex>
                <v-flex xs12 sm6 md4>
                <v-text-field v-model="edit.email" label="Client Email"></v-text-field>
              </v-flex>             
               <v-flex xs12 sm6 md4>
                <v-text-field v-model="edit.provider" label="Client Provider"></v-text-field>
              </v-flex>
              
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save(clientId,client[0])">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-data-table
      :headers="clientTable"
      :items="client"      
      show-actions
      class="elevation-1"
    >
        <template slot="items" slot-scope="props">            
        <td class="text-xs-center">{{ props.item.name }}</td>      
        <td class="text-xs-center">{{ props.item.phone }}</td> 
        <td class="text-xs-center">{{ props.item.email }}</td>      
        <td class="text-xs-center">{{ props.item.provider }}</td>          
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="Edit(props.item._id)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="Delete(props.item._id)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
      
    </v-data-table>
  </div>
  </v-app>
</template>


<script>
import axios from 'axios'
  export default {
    data: () => ({
      dialog: false,
      dialog1:false,
         clientTable:[        
        { text: 'Name', align: 'center', value: 'name' },      
        { text: 'Phone', align: 'center', value: 'phone' },
        { text: 'E-mail', align: 'center', value: 'email' },      
        { text: 'Provider', align: 'center', value: 'provider' },               
        { text: 'Actions',  align: 'center',value: 'name', sortable: false }
        ],
      client: [],
     
        clientId:{

     },
        edit:{
            name:'',            
            description:'',
            
          }
     ,
      editedIndex: -1,
     
      defaultItem: {
       
      }
      
    }),
    
  items:[],
    computed: {
      formTitle () {
       
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },
    

        
     methods: {      
      initialize () {
        axios.get('http://localhost:3000/client')
     .then((response) =>{
     console.log(response.data);
     this.client = response.data;
   })
   .catch((error) => {
     console.log(error);
   });
             },
             newItem(id){
                axios.post(`http://localhost:3000/client/${id}`).then((response)=>{
                  console.log(response)
                  this.client=response.data
                }).catch((error)=>{
                  console.log(error)
                })
             },
  
      async Edit (id,item) {
        this.editedIndex  = this.client.indexOf(item)
       //this.Edit = Object.assign({},item)
        this.dialog = true 
        this.clientId = id
       
        this.edit=Object.assign({},item)
      },

      Delete (id) {
          axios.delete(`http://localhost:3000/client/${id}` )
      .then((result) => {        
       this.client.splice(this.client.indexOf(id), 1)         
      })
      .catch(e => {
        console.log(e)
      })
      
      },

      close () {
        this.dialog = false
    
      },

      save (id) {
      
        axios.put(`http://localhost:3000/client/${id}`,this.edit)
      .then(response => {       
       this.edit=response.data      
       console.log(response.data)
      
        if (this.editedIndex > -1) {
          Object.assign(this.client[this.editedIndex], this.edit)
        } else {
          this.client.push(this.edit)
        }
      })
      
      .catch(e => {
      this.errors.push(e)
}) 
     
        this.close()
      }
    }
  }
</script>