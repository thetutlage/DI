  
  "use strict"


  let injector = require("coffee-sweetener")


  let instance = null

  class Ioc{

    constructor(){
      if(!instance) instance = this       // setting up singleton instance
      this.container = new injector()
      return instance
    }

    register(name,module){
      this.container.map({klass:module}).as(name)
    }

    get(name){
      return this.container.getInstanceOf(name)
    }

    singleton(name,module){
      this.container.map({klass:module}).as(name).asSingleton()
    }

    map(name,value){
      this.container.map({value,name})
    }
  }


  module.exports    = Ioc