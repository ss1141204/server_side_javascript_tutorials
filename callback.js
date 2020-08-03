 a = [3, 1, 2];
 function b(v1, v2){return v2 - v1};
 /*
 function b(v1, v2){return v2 - v1}; -> [ 3, 2, 1 ]
 function b(v1, v2){return v1 - v2}; -> [ 1, 2, 3 ]
 function b(v1, v2){return 0}; -> [ 3, 1, 2 ]
 */
 a.sort(b);

 console.log(a);
