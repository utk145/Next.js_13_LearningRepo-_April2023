//  This will just like basic data
import React from 'react';
import Link from 'next/link';
import { FaCodeBranch, FaStar, FaEye, FaCode } from 'react-icons/fa';

async function fetchData(name) {
    const response = await fetch(`https://api.github.com/repos/utk145/${name}`,{
        next:{
            // This is caching
            revalidate:60
        },
    });
    return await response.json();
}


const Repo = async ({ name }) => {
    const repo = await fetchData(name);
    // console.log(repo);
    return (
        <>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <div className="card-stats">
                <div className="card-stat">
                    <FaStar />
                    <span>{repo.stargazers_count}</span>
                </div>

                <div className="card-stat">
                    <FaCodeBranch />
                    <span>{repo.forks_count}</span>
                </div>
                <div className="card-stat">
                    <FaEye />
                    <span>{repo.watchers_count}</span>
                </div>
            </div>

        </>
    )
}

export default Repo