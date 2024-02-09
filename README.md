# 🦕Denoに入門してみた!
[zennの入門記事](https://zenn.dev/joo_hashi/articles/527f413ea7b4c9)

Deno は、現代のプログラマーにとって最も生産性、安全性、パフォーマンスに優れた JavaScript ランタイムです。

Node.jsを開発したライアンダールさんが発明した技術みたいです。デフォルトでTypeScriptをサポートしてます。

## Denoでアプリケーションを作ってみる
MCというViewがない、MVCと違って、ModelとControllerしか使わないアーキテクチャを使った構成にしてみました。


モデルは、TypeScriptの場合はInterfaceで作るのが一般的です。
```ts
// 配列で使うデータ型のmodelを作成。TSだとinterfaceを使うのが一般的
export interface Person {
    name: string;
  age: number;
}
```

 `import`文を使うときは、拡張値の`.ts`をつけないとエラーが出てしまいますので注意!

配列を操作するロジックを書いたコントローラーで、モデルを使います。
```ts
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
```

実行するときは、`index.ts`に記述します。
```ts
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
```