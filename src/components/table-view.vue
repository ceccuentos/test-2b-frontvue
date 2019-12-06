<template>
  <div id='tableView'>
      <div class='table-view'>
        <div class="table-item bold">
          <div class="table-column"></div>
          <div class="table-column">
            <div class='d-flex h-100 w-100'>
              Nombre
            </div>
          </div>
          <div class="table-column">
            <div class='d-flex h-100 w-100'>
              Apellido
            </div>
          </div>
          <div class="table-column">
            <div class='d-flex h-100 w-100'>
              Usuario
            </div>
          </div>
          <div class="table-column">
            <div class='d-flex h-100 w-100'>
              Teléfono
            </div>
          </div>
          <div class="table-column">
            <div class='d-flex h-100 w-100'>
              Ubicación
            </div>
          </div>
          <div class="table-column"></div>
        </div>
       <table-item
        v-for="item in itemsList" :key="item.login.md5" 
        :userInfo="item" :openSelected="openSelectedItem" :closeSelected="closeSelectedItem"
       ></table-item>
      </div>
  </div>
</template>

<script>
import TableItem from './table-view-item.vue'
import  axios from 'axios';
import { auth } from "@/firebase";

export default {
  name: 'TableView',  
  components: {
    TableItem
  },
  data: function () {
    return {
      itemsList: [],
      count: 4,
    }
  },
  methods: {
    getItemsList: function () {
        this.getItem();
    },
    getItem: async function () {
        const token = await auth.currentUser.getIdToken();
        const urlNames = 'https://test-2b-back.herokuapp.com/api/getnames' 
        //const urlNames = 'http://localhost:3001/api/getnames'
        axios.get(urlNames, {headers:  { authorization: `${token}` }})    
        .then(response => {
          for( let i = 0; i <= this.count-1; i++) {
            response.data.results[i].opened = false;
            this.itemsList.push(response.data.results[i])
          }
        })
        .catch( e => {
            if (!e) {console.log('Error no determinado')}
            else if (e.response.status = 503)
            {
              console.log('servicio no disponible')
              // reintenta
              this.getItem();
            } 
            //this.errors.push(e);
        })
    },
    openSelectedItem: function(id) {
      for(let item of this.itemsList) {
        item.opened = false;
      }
      const selectedElement = this.itemsList.find((el) => el.login.md5 === id);
      if(selectedElement) {
        selectedElement.opened = true;
      }
    },
    closeSelectedItem: function(id) {
      const selectedElement = this.itemsList.find((el) => el.login.md5 === id);
      if(selectedElement) {
        selectedElement.opened = false;
      }
    },
  },
  created: function () {
    this.getItemsList();
  }
};
</script>

<style>
#tableView {
  padding: 15px;
  background-color: rgb(238,238,238);
}
.table-item {
  display: flex;
  padding: 5px;
}
.item-wrapper:nth-child(2n) {
  background: rgb(204,204,204);
}
.table-item  > .table-column {
  width: 16%;
}
.table-item .table-column:first-child, .table-item .table-column:last-child  {
  width: 10%;
}
.bold {
  font-weight: 700;
}
</style>
