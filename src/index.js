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

/**
 * スプレッド構文 ...
 */
// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [arnum1, arnum2, ...arnum3] = arr2;
console.log(arnum1);
console.log(arnum2);
console.log(arnum3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

// 配列を＝でコピーすると元の配列も参照を受けてしまう。
const arr8 = arr4;
arr8[0] = 100;
console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
// 従来のやり方
const nameArr1 = ["田中", "山田", "じゃけえ"];
// for (let index = 0; index < nameArr1.length; index++) {
//   console.log(nameArr1[index]);
// }

// map を使ったやり方
// const nameArr2 = nameArr1.map((name) => {
//   return name;
// });
// console.log(nameArr2);

nameArr1.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// filterの使い方
// ある条件で取り出すときに使う
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

// mapを使って特定の条件で配列を変えたい場合
const newNameArr = nameArr1.map((name) => {
  if (name === "じゃけえ") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ？ 条件がtrueの時：条件がfalseの時
const val1 = 1 > 0 ? "trueです" : "falseです";
console.log(val1);

const numnum = 1300;
// console.log(numnum.toLocaleString());

const formattedNum =
  typeof numnum === "number"
    ? numnum.toLocaleString()
    : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100をこえています！" : "許容範囲内です";
};
console.log(checkSum(50, 60));

/**
 * 論理演算子のほんとうの意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1が2はtrueです。");
// }
// if (flag1 && flag2) {
//   console.log("1が2もtrueです。");
// }

// || は左側がfalseなら右側を返す
const nukn = null;
const fee = nukn || "金額未設定です";
console.log(fee);

// && は左側がtruなら右側を返す
const nukn2 = 100;
const fee2 = nukn2 && "なにか設定されました";
console.log(fee2);
