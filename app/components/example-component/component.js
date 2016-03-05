import Ember from 'ember';

export default Ember.Component.extend({
	tagName:"div",
	classNames:["container"],//get class directly from strings in the list or it can be string instead of list
	classNamesBindings:["otherClasses"],//get class value from variables in each string from the list or it can be variable string instead of list
	otherClasses:"",//otherClasses can be send from controller or it will not have any value to the created div tag to wraps the component
	variablePassedFromController:"",
	actions:{
		actionForFirstInput:function(value,event){
			//template actions are only to fired within the component. Need to use following code to send it to controller.
			this.sendAction("actionInComponent", value,event);
		},
		actionForSecondInput:function(value,event){
			this.sendAction("actionInComponentForMut",value);
		}
	}
});
