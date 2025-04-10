import { createContext, useState } from "react";

export const assignTask = createContext({
    developer: {
        name: "",
        designation: ""
    },
    selectDeveloper: () => { }
});

export const AssignTaskProvider = ({ children }) => {

    const [developer, setDeveloper] = useState({
        id: null,
        name: "",
        designation: ""
    })


    function selectDeveloper(details) {
        setDeveloper(() => ({
            id: details._id.toString(),
            name: details.name,
            designation: details.designation
        }))
    }
    console.log(developer.id)

    const contextValue = {
        developer: developer,
        selectDeveloper: selectDeveloper
    }

    return (
        <assignTask.Provider value={contextValue}>
            {children}
        </assignTask.Provider>
    )
}