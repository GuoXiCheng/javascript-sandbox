const date = new Date();

const dateFunctions = [
    { Function: "date", Result: date.toString() },
    { Function: "getDate", Result: date.getDate() },
    { Function: "getDay", Result: date.getDay() },
    { Function: "getMonth", Result: date.getMonth() },
    { Function: "getFullYear", Result: date.getFullYear() },
    { Function: "getHours", Result: date.getHours() },
    { Function: "getMinutes", Result: date.getMinutes() },
    { Function: "getSeconds", Result: date.getSeconds() },
    { Function: "getMilliseconds", Result: date.getMilliseconds() },
    { Function: "getTime", Result: date.getTime() },
    { Function: "now", Result: Date.now() },
    { Function: "toDateString", Result: date.toDateString() },
    { Function: "toISOString", Result: date.toISOString() },
    { Function: "toJSON", Result: date.toJSON() },
    { Function: "toLocaleDateString", Result: date.toLocaleDateString() },
    { Function: "toLocaleTimeString", Result: date.toLocaleTimeString() },
    { Function: "toLocaleString", Result: date.toLocaleString() },
    { Function: "toString", Result: date.toString() },
    { Function: "toTimeString", Result: date.toTimeString() },
    { Function: "toUTCString", Result: date.toUTCString() },
    { Function: "valueOf", Result: date.valueOf() },
];

console.table(dateFunctions);

/*
┌─────────┬──────────────────────┬────────────────────────────────────────────────────┐
│ (index) │ Function             │ Result                                             │
├─────────┼──────────────────────┼────────────────────────────────────────────────────┤
│ 0       │ 'date'               │ 'Sat Mar 30 2024 15:18:07 GMT+0800 (中国标准时间)'  │
│ 1       │ 'getDate'            │ 30                                                 │
│ 2       │ 'getDay'             │ 6                                                  │
│ 3       │ 'getMonth'           │ 2                                                  │
│ 4       │ 'getFullYear'        │ 2024                                               │
│ 5       │ 'getHours'           │ 15                                                 │
│ 6       │ 'getMinutes'         │ 18                                                 │
│ 7       │ 'getSeconds'         │ 7                                                  │
│ 8       │ 'getMilliseconds'    │ 14                                                 │
│ 9       │ 'getTime'            │ 1711783087014                                      │
│ 10      │ 'now'                │ 1711783087018                                      │
│ 11      │ 'toDateString'       │ 'Sat Mar 30 2024'                                  │
│ 12      │ 'toISOString'        │ '2024-03-30T07:18:07.014Z'                         │
│ 13      │ 'toJSON'             │ '2024-03-30T07:18:07.014Z'                         │
│ 14      │ 'toLocaleDateString' │ '2024/3/30'                                        │
│ 15      │ 'toLocaleTimeString' │ '15:18:07'                                         │
│ 16      │ 'toLocaleString'     │ '2024/3/30 15:18:07'                               │
│ 17      │ 'toString'           │ 'Sat Mar 30 2024 15:18:07 GMT+0800 (中国标准时间)'  │
│ 18      │ 'toTimeString'       │ '15:18:07 GMT+0800 (中国标准时间)'                  │
│ 19      │ 'toUTCString'        │ 'Sat, 30 Mar 2024 07:18:07 GMT'                    │
│ 20      │ 'valueOf'            │ 1711783087014                                      │
└─────────┴──────────────────────┴────────────────────────────────────────────────────┘
*/