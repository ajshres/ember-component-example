import Ember from 'ember';

export default Ember.Controller.extend({
	variableInController:"",
	variableInControllerObserver:function(){
		//Tracking the change of variableInController
		console.log("variableInController",this.get("variableInController"));
	}.observes('variableInController'),
	mutVariableInController:"",
	mutVariableInControllerObserver:function(){
		//Tracking the change of variableInController
		console.log("mutVariableInController",this.get("mutVariableInController"));
	}.observes('mutVariableInController'),
	actions:{
		actionInController:function(value,value2){
			//Component calls actions in controller only. Cannot reach to route actions yet.
			console.log("Called Action in Controller",value,value2);
		}
	}
});
