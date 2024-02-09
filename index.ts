import { PersonController } from "./controller/person_controller.ts";

// PersonControllerのインスタンスを作成
const personController = new PersonController();

// Person型の要素を追加
personController.addPerson({ name: "Taro", age: 25 });
personController.addPerson({ name: "Hanako", age: 30 });
personController.addPerson({ name: "Jiro", age: 35 });
personController.addPerson({ name: "Yoko", age: 40 });

// Person型の要素を取得
console.log(personController.getPersons());
// 出力結果
// [ { name: 'Taro', age: 25 }, { name: 'Hanako', age: 30 } ]
// Person型をshuffleする
personController.shufflePersons();
// Person型の要素を取得
console.log(personController.getPersons());