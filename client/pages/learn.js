import React, { useState } from "react"
import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar"
import { Button } from "@mui/material";

const data = [
    {
        title: "Managing Finances",
        category: "Finance",
        img: "/assets/lesson_1.png",
        time: "30"
    },
    {
        title: "Conflict Resolution",
        category: "Life",
        img: "/assets/lesson_2.png",
        time: "45"
    },
    {
        title: "Building a Resume",
        category: "Career",
        img: "/assets/lesson_3.png",
        time: "60"
    }
];

const filterData = (query, data) => {
    if (!query) {
        return data;
    } else {
        console.log(query)
        return data.filter((d) => (d['title'].toLowerCase().includes(String(query).toLowerCase()) || String(query).toLowerCase().includes(d['category'].toLowerCase())));
    }
};

const CategoryCard = ({ label, setSearchQuery }) => {
    return (
        <>
            <a target='_blank' onClick={() => setSearchQuery(label)}>
                <div className="category-card">
                    <h3>{label}</h3>
                </div>
            </a>
        </>
    )
}

const LessonCard = ({ title, category, img, time }) => {
    return (
        <>
            <div className="lesson-card">
                <div className="lesson-img">
                    <img className="limg" src={img} />
                </div>
                <div className="row-content">
                    <div className="category">
                        {category}
                    </div>
                    <div className="time">
                        {time} mins
                    </div>
                </div>
                <div className="lesson-title">
                    {title}
                </div>
            </div>
        </>
    )
}

export default function Learn() {
    const [searchQuery, setSearchQuery] = useState("");
    const dataFiltered = filterData(searchQuery, data);

    return (
        <>
            <Navbar />
            <div className="containerL">
                <h2>Browse Categories</h2>
                <div className="categories">
                    <CategoryCard setSearchQuery={setSearchQuery} label='Finance' />
                    <CategoryCard setSearchQuery={setSearchQuery} label='Career Skills' />
                    <CategoryCard setSearchQuery={setSearchQuery} label='Life Skills' />
                    <CategoryCard setSearchQuery={setSearchQuery} label='Conflict Resolution' />
                </div>

                <div className='filters'>
                    <div className="searchbar">
                        <SearchBar setSearchQuery={setSearchQuery} label="lesson" />
                    </div>

                    <Button sx={{ padding: "0", margin: "0", order: 3, width: '30%' }} onClick={() => { setSearchQuery("") }}>Reset Filters</Button>
                </div>
                <div className="lessons">
                    {dataFiltered.map(({ title, category, img, time }) => (
                        <LessonCard
                            title={title}
                            category={category}
                            img={img}
                            time={time}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
