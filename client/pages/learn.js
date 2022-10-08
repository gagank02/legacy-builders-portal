import React, { useState } from "react"
import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar"

const data = [
    {
        title: "Empathy",
        category: "Conflict Resolution"
    },
    {
        title: "Taxes",
        category: "Finance"
    },
    {
        title: "Communication",
        category: "Conflict Resolution"
    },
    {
        title: "Learning Curves",
        category: "Career Skills"
    }
];

const filterData = (query, data) => {
    if (!query) {
        return data;
    } else {
        return data.filter((d) => d.toLowerCase().includes(query));
    }
};

const CategoryCard = ({ label }) => {
    return (
        <>
            <a target='_blank' href='/learn'>
                <div className="category-card">
                    <h3>{label}</h3>
                </div>
            </a>
        </>
    )
}

const LessonCard = ({title, category}) => {
    return (
        <>
        </>
    )
}

export default function Learn() {
    const [searchQuery, setSearchQuery] = useState("");
    const dataFiltered = filterData(searchQuery, data);

    return (
        <>
            <Navbar />
            <div className="container">
                <h2>Browse Categories</h2>
                <div className="categories">
                    <CategoryCard label='Finance' />
                    <CategoryCard label='Career Skills' />
                    <CategoryCard label='Problem Skills' />
                    <CategoryCard label='Conflict Resolution' />
                </div>
                <div className="searchbar">
                    <SearchBar setSearchQuery={setSearchQuery} label="lesson" />
                </div>






            </div>
        </>
    )
}

{/* <div style={{ padding: 3 }}>
                {dataFiltered.map((d) => (
                    <div
                        className="text"
                        style={{
                            padding: 5,
                            justifyContent: "normal",
                            fontSize: 20,
                            color: "blue",
                            margin: 1,
                            width: "250px",
                            BorderColor: "green",
                            borderWidth: "10px"
                        }}
                        key={d.id}
                    >
                        {d}
                    </div>
                ))}
            </div> */}