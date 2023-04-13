// import React from 'react'
// import Link from 'next/link'

// This code was used before search functionality, It was sever side earlier
// async function fetchCourse() {
//     const response = await fetch(`http://localhost:3000/api/courses`);
//     return await response.json();
// }


// const Courses = async () => {

//     const courses = await fetchCourse();

//     return (
//         <div className='courses'>
//             {courses.map((course)=>(
//                 <div key={course.id} className="card">
//                     <h2>{course.title}</h2>
//                     <small>Level: {course.level}</small>
//                     <p>{course.description}</p>
//                     <Link href={course.link} target="_blank" className='btn'>Go to course</Link>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default Courses


// Without a key, React will have to update the entire list every time a change occurs, which can be inefficient and slow.
// In the code snippet you provided, the map() method is used to iterate over the courses array and render a card for each course. The key prop is set to the id of each course object, which is a unique identifier. This allows React to efficiently update the list of courses when necessary.











import React from 'react'
import Link from 'next/link'


const Courses =  ({courses}) => {

   

    return (
        <div className='courses'>
            {courses.map((course)=>(
                <div key={course.id} className="card">
                    <h2>{course.title}</h2>
                    <small>Level: {course.level}</small>
                    <p>{course.description}</p>
                    <Link href={course.link} target="_blank" className='btn'>Learn Now</Link>
                </div>
            ))}
        </div>
    )
}

export default Courses



















