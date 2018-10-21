// 'use strict';

// let tasks = [];

// const $task = document.getElementById('task');
// const $addtask = document.getElementById('addtask');

// Element.onclick = add;

// function add(event) {
//     event.preventDefault();
//     const todo = $task.value;

//     const task = {
//         todo: $task.value,
//         completed: false,
//     };

//     tasks.push(task);

//     $task.value = "";

//     console.log(tasks);

// }

// addTask.onclick = add;

'use strict';
document.onload(function () {
    document.body.onkeyup = function (event) {
        event.preventDefault();

        if (event.ctrlkey && event.keyCode === 69)

    }

    document.body.onkeydown = function (event) {
        event.preventDefault();

    }

    document.body.onkeypress = function (event) {
        event.preventDefault();

    }

});
