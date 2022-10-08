import React, { useState } from "react"
import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar"

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
        return data.filter((d) => d['title'].toLowerCase().includes(query));
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