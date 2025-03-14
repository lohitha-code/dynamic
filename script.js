const works = {
    "task1" : {"title" : "Project 1", "url" : "file:///C:/Users/hp/Downloads/task_json_iframe%20(1)/task_json_iframe/works/task1/index.html"},
    "task2" : {"title" : "Project 2", "url" : "file:///C:/Users/hp/Downloads/task_json_iframe%20(1)/task_json_iframe/works/task2/index.html"},
    "task3" : {"title" : "Project 3", "url" : "file:///C:/Users/hp/Downloads/task_json_iframe%20(1)/task_json_iframe/works/task3/index.html"},
};

// write your code here 
// you need to display the list of work titles in a navigation panel 
// if a work title is clicked, the body section should display the work without reloading the page
function showProject(project) {
    let title = document.getElementById("project-title");
    let contentArea = document.getElementById("content-area");

    switch (project) {
        case "project1":
            title.textContent = "Task 1";
            contentArea.style.backgroundColor = "#ff5733"; // Red-Orange
            break;
        case "project2":
            title.textContent = "Task 2";
            contentArea.style.backgroundColor = "#00a841"; // Green
            break;
        case "project3":
            title.textContent = "Task 3";
            contentArea.style.backgroundColor = "#337ab7"; // Blue
            break;
        default:
            title.textContent = "Task 2";
            contentArea.style.backgroundColor = "#00a841"; // Default Green
    }
}

