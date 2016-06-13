import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  value() { return faker.internet.email(); },
  isPrimary() {return true;},
  type(){ return 'email';}
});
