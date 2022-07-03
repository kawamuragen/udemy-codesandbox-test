/**
 * const, let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数再宣言";

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可
// val3 = "const変数を上書き";

// const宣言再宣言
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティ変更できる。
const val4 = {
  name: "じゃけえ",
  age: 28
};
val4.name = "jak";
val4.addres = "Hiroshima";
console.log(val4);

// constで定義した配列は要素を変更できる
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけえ";
// const age = 28;
// 私の名前はじゃけえです。年齢は28歳です。

// 従来の方法
// const message1 = "私の名前は" + name + "です。名前は" + age + "です。";
// console.log(message1);

// テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来の関数

// function func1(str) {
//   return str;
// }

const func1 = function (str) {
  return str;
};
console.log(func1("func1です。"));

// アロー関数
// カッコを省略できるけど、Prettierがフォーマットする。
// 処理が１行で終わる場合はreturnを省略できる
const func2 = (str) => str;
console.log(func2("fund2です。"));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(10, 20));

/**
 * 分割代入
 */
const myProfile = {
  name: "じゃけえ",
  age: 28
};

const message4 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
console.log(message4);

const { name, age } = myProfile;
const message5 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message5);

const myProfile2 = ["じぇけえ", 29];
const message6 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}です。`;
console.log(message6);

const [namearr, agearr] = myProfile2;
const message7 = `名前は${namearr}です。年齢は${agearr}歳です。`;
console.log(message7);

/**
 * デフォルト値、引数など
 */

const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
sayHello();
