
type Task = {
    task: string;
    completed: boolean;
};

const Task1 = {
    task: "study at Miva",
    completed: false
};

const tasks: Task[] = [
    Task1,
    { task: "Complete programming assignment", completed: true },
    { task: "Read the Bible", completed: true }
];

tasks[0].completed = true;
tasks[2].completed = false;

for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed === true) {
        console.log(tasks[i].task + " - completed");
    } else {
        console.log(tasks[i].task + " - pending");
    }
}
