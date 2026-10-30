// 7. Daily To-Do ListBuild a program that stores a student’s tasks for the day. Let the student mark tasks as complete, then show which tasks are finished and which still need to be done.

// Your program should use: an array of task objects, a loop to display or check tasks, and conditionals to show different statuses.

const task1 = {
    task: "study at Miva", completed: false
};
const tasks = [task1,
    { task: "Complete programming assignment", completed: false },
    { task: "Read the Bible", completed: true }];
tasks[0].completed = true;
tasks[2].completed = true;

for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed === true) {
        console.log(tasks[i].task + " - completed");

    } else {
        console.log(tasks[i].task + " - pending");
    }
}




