/*
 * @Description: 
 * @Author: lijin
 * @Date: 2023-09-26 10:00:18
 * @LastEditTime: 2023-09-26 10:00:27
 * @LastEditors:  
 */
type Test<T> = T extends number ? 1 : 2;

type res = Test<any>;