import Ember from 'ember';

export function formatAddress([addresses, type]) {
  var count=0;
  var primary='';

  addresses.forEach(function(ele,ind,arr){
    if(ele.get('type')==type){
      if(ele.get('is_primary')){
        primary = ele.value;
      } else {
        count +=1;
      }
    }
  })

  return primary + " +(" + count + ")";
}

export default Ember.Helper.helper(formatAddress);
