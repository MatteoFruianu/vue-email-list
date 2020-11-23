

const app = new Vue ({

   el: '#app',

   data: {
       
    emailAddress: '',
    
    mailList: []
   },

   created() {

    const self = this;

    

    for (let i = 0; i < 10; i++) {

     
      this.randomEmail()

    }

   },

   methods: {


     randomEmail() {

    const self = this;


      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function (response) {
        // handle success
        self.emailAddress = response.data.response;
  
        self.mailList.push(self.emailAddress)
  
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

     }
      
     
   }

   


 

  

})