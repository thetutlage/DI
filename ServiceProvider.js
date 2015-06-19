
  "use strict"
  
  let Ioc   = new(require("./Ioc"))  

  class ServiceProvider{

    constructor(){
      this.app = Ioc
    }

  }


  module.exports = ServiceProvider