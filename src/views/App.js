import React, { useState } from 'react';
import employees from "../utils/employees.json";


function App() {
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ sorted, setSorted] = useState(false);
    const [ data, setEmployees ] = useState(employees);

    function handleSearchTerm(event)  {
        setSearchTerm(event.target.value)
    }

    function handleSortByName() {
        // sort array ascending or descending 
        if (!sorted) {
            setEmployees(data.sort((a, b) => (a.name > b.name) ? 1 : -1));
            setSorted(true);
        } else {
            setEmployees(data.sort((a, b) => (a.name > b.name) ? -1 : 1));
            setSorted(false);
        }
    }

    // filtering out the names of employees with matching strings 
    const filteredEmployees = data.filter(employee => employee.name.first.toLowerCase().startsWith(searchTerm.toLowerCase()));
    return (
        <div>
            <Header/>
            <Wrapper>
                <SearchBar
                    onSearch={handleSearchTerm}
                    searchTerm={searchTerm}
                    handleSortByName={handleSortByName}
                />
                <EmployeeCardList data={filteredEmployees}/>
            </Wrapper>
        </div>
    )
}

export default App;
