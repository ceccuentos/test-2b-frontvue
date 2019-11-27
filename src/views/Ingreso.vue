<template>
    
  <v-layout justify-center="" mt4>
     
   <v-flex xs12 sm8 md6 xL4>
        <v-card>

          <v-card-text class="display-1 text-uppercase accent white--text text-center" >
            <span >Ingreso</span>
          </v-card-text>
        
          <v-card-text>
            <v-btn block color="error" @click="google"> 
              <v-icon Left dark>fab fa-google</v-icon>
              Google
            </v-btn>
            
          </v-card-text>


        </v-card>
    </v-flex>
  </v-layout>
  
</template>

<script>
import router from "@/router"
import { firebase, auth } from "@/firebase";

export default {
    data() {
    return {
            registro: false
        }
    },
    methods: {
        async google(){
            const provider = new firebase.auth.GoogleAuthProvider();
            console.log('google');
            this.ingreso(provider);
       },
       async ingreso(provider){
        
        firebase.auth().languageCode = 'es';

        try {
          const result = await firebase.auth().signInWithPopup(provider)
          const user = result.user;
          console.log(user)
          // Construir usuario

          //this.setUser(user)
          
          router.push({ name: 'home' })

        } catch (error) {
          console.log(error)
        }

      }

    
    }
}
</script>

