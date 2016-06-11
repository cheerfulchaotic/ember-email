import Ember from 'ember';

export function primaryListing(params) {
  for (item in params[0]){
    if((item['tags']||'').includes('primary')){
      return item.value + " +(" + (params[0].length-1) + ")";
    }
  } return "no primary"
}

export default Ember.Helper.helper(primaryListing);
