import { observable, autorun } from '../src/index';

class Person {
  @observable
  name = 'lihaonan'
  @observable
  sex = 'man';
  age = 22;
}
const person = new Person();

autorun(() => {
  console.log('autorun', person.name);
  // console.log('autorun', person.age);
})
person.name = 'dashuaige';
// person.sex = 'woman';
// person.age = 23;
