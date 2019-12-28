

/***********************************************************************************************************
 * 属性类型接口
 */
interface Person {
    name: string,
    age: number,
}

let p: Person = {
    name: 'cohen',
    age: 23,
};


/***********************************************************************************************************
 * 属性类型接口
 */
interface nameArray {
    [index: number]: string
}
let arr: nameArray = ["John", "cohen", "Bran"];


interface nameObject {
    [index: string]: string
}
let obj: nameObject = {
    name: 'cohen',
    age: '23',
};

/***********************************************************************************************************
 * 属性类型接口
 */


