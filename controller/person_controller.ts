import { Person } from "../model/person.ts";

// modelのperson.tsをcontrollerのperson_controller.tsで使う
export class PersonController {

    // からの配列に対して、Person型の要素を追加
    private persons: Person[] = [];

    // Person型の要素を追加
    addPerson(person: Person) {
        this.persons.push(person);
    }
    // Person型の要素を取得
    getPersons() {
        return this.persons;
    }

    // Person型をshuffleする
    shufflePersons() {
        this.persons = this.persons.sort(() => Math.random() - 0.5);
    }
}