import { useState } from "react";
import { NewProject } from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { ProjectSideBar } from "./components/ProjectSideBar";
import SelectedProjectData from "./components/selectedProjectData";

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {

  }

  function handleDeleteTask(text) {

  }

  function handleStartAddProject() {
    setProjectState(preState => {
      return {
        ...preState,
        selectedProjectId: null
      }
    })
  }

  function handleStart(projectData) {
    const projectId = Math.random()
    const newProject = {
      ...projectData,
      id: projectId
    }

    setProjectState(preState => {
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

  console.log(projectState.selectedProjectId);

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)

  let content = <SelectedProjectData project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} />;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleStart} onCancel={handleCancelAddProject} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject={handleStartAddProject} projects={projectState.projects} onSelectProject={handleSelectProject} />
      {content}
      {/* <SelectedProjectData onSendData={sendProject} /> */}
    </main>
  );
}

export default App;
