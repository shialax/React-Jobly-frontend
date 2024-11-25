import React, { useState, useEffect } from 'react';

function CompanyList() {
    const [companies, setCompanies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch(`/api/companies?name=${searchTerm}`)
        .then(res => res.json())
        .then(data => setCompanies(data));
    }, [searchTerm]);

    const handleSearch = (e) => setSearchTerm(e.target.value);

    return (
        <div>
            <h1>Companies</h1>
            <input type="text"
            placeholder='Search companies...'
            value={searchTerm}
            onChange={handleSearch}
            />
            {companies.map(c => (
                <div key={c.handle}>
                    <h2>{c.name}</h2>
                    <p>{c.description}</p>
                    </div>
            ))}
        </div>
    );
}

export default CompanyList;
