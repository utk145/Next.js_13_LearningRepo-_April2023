// This will be the list of directories
import Link from 'next/link';
import React from 'react'

async function fetchRepoData(name) {

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(`https://api.github.com/repos/utk145/${name}/contents`, {
        next: {
            // This is caching
            revalidate: 60
        },
    });
    return await response.json();
}


const RepoDirs = async ({ name }) => {
    const contents = await fetchRepoData(name);
    const dirs = contents.filter((content) => content.type === 'dir');
    // console.log(contents);
    return (
        <>
            <Link  target="_blank" href={`https://github.com/utk145/${name}`} style={{ textDecoration: 'none', fontSize: '1.2rem', color: 'black' }}>Directories</Link>
            <ul>
                {dirs.map((dir) => (
                    <li key={dir.path}>
                        {/* <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link> */}
                        <Link href={`https://github.com/utk145/${name}`} target="_blank">{dir.path}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default RepoDirs