

const app = new Vue ({

   el: '#app',

   data: {
       
    emailAddress: ''
       
   },

   created() {

    const self = this;

    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(function (response) {
      // handle success
      self.emailAddress = response.data.response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
   }

 

  

})