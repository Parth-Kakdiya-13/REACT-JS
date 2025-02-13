import { useState } from "react";
import { NewProject } from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { ProjectSideBar } from "./components/ProjectSideBar";
import { SelectedProjectData } from "./components/SelectedProjectData";

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });


  function handleAddTask(text) {
    // console.log(text.length);

    if (text.length <= 0) {
      alert("Plz Add some Text In Input Field")
      return;
    }

    setProjectState((preState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: preState.selectedProjectId,
        id: taskId
      };

      return {
        ...preState,
        tasks: [...preState.tasks, newTask]
      }
    })
  }

  function handleDeleteTask(id) {
    setProjectState((preState) => {
      return {
        ...preState,
        tasks: preState.tasks.filter(task => task.id !== id)
      }
    })
  }

  function handleStartAddProject() {
    setProjectState(preState => {
      return {
        ...preState,
        selectedProjectId: null
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectState(preState => {
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId
      };

      return {
        ...preState,
        selectedProjectId: undefined,
        projects: [...projectState.projects, newProject]
      }
    })

  }

  function handleCancelAddProject() {
    setProjectState(prestate => {
      return {

        ...prestate,
        selectedProjectId: undefined
      }
    })
  }

  const handleSelectProject = (id) => {
    setProjectState(prestate => {
      return {

        ...prestate,
        selectedProjectId: id
      }
    })
  }

  const handleDeleteProject = () => {
    setProjectState(prestate => {
      return {
        ...prestate,
        selectedProjectId: undefined,
        projects: prestate.projects.filter(project => project.id !== prestate.selectedProjectId)
      }
    })
  }


  const selectedProjectTasks = projectState.tasks.filter(task => task.projectId === projectState.selectedProjectId);
  console.log(projectState);



  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)

  let content = <SelectedProjectData project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} task={selectedProjectTasks} />;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject={handleStartAddProject} projects={projectState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectState.selectedProjectId} />
      {content}
      {/* <SelectedProjectData onSendData={sendProject} /> */}
    </main>
  );
}

export default App;
