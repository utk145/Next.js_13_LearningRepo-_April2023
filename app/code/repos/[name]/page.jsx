import React, { Suspense } from 'react'
import Repo from '@/app/components/Repo';
import Link from 'next/link';
import RepoDirs from '@/app/components/RepoDirs';


const RepoPage = ({ params: { name } }) => {
    //  You could destructure it directly like  const RepoPage = ({params : {name} }) => {  and then use  <h2>{name}</h2>

    return (
        <div className='card'>

            {/* <h2>{params.name}</h2>
        <p>Repo Details</p> */}
            <Link href='/code/repos' className='btn btn-back'>Back to repositories </Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Repo name={name} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <RepoDirs name={name} />
            </Suspense>

        </div>
    )
}

export default RepoPage