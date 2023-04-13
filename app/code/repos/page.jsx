// 'use client';
import React from 'react';
import Link from 'next/link';
import { FaStar, FaCode, FaCodeBranch, FaEye } from 'react-icons/fa';

async function fetchData() {
    const response = await fetch('https://api.github.com/users/utk145/repos',
    {
        next:{
            // This is caching
            revalidate:60
        },
    });

    await new Promise((resolve)=>setTimeout(resolve,1000));


    return await response.json();
}


const ReposPage = async () => {
    const repositories = await fetchData();
    // console.log(repositories);

    return (
        <div className='repos-container'>
            {/* To fetch the repos we use https://api.github.com/users/utk145/repos */}
            {/* {repositories[0].name} */}
            <h2>My Repositories</h2>
            <ul className="repo-list">
                {repositories.map((item)=>(
                    <li key={item.id}>
                        <Link href={`/code/repos/${item.name}`}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <div className="repo-details">
                                <span>
                                    <FaStar/>{item.stargazers_count}
                                </span>
                                <span>
                                    <FaCodeBranch/>{item.forks_count}
                                </span>
                                <span>
                                    <FaEye/>{item.watchers_count}
                                </span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReposPage