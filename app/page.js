
// This below code is server component so to have serach functionality we'll have to use client components, Therefore a little change in the way <Courses/> is nested and all... , we gotta use useEffect and like those client components to add such functionalities and  interactivity  
// import React from 'react'
// import Link from 'next/link'
// import Courses from './components/Courses'


// const HomePage = () => {
//   return (
//     <>
//       <h1>
//         Welcome to My First Next Js Project
//       </h1>
//       <Courses/>

//     </>
//   )
// }

// export default HomePage










'use client';
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Courses from './components/Courses'
import Loader from './loading';
import CourseSearch from './components/CourseSearch';
const HomePage = () => {

  const [courses, setCourses] = useState([]);
  const [loadinng, setLoadinng] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch(`/api/courses`);
      const data = await response.json();
      setCourses(data);
      setLoadinng(false);
    }

    fetchCourses();

  }, [])


  if(loadinng){
    return <Loader/>
  }

  return (
    <>
      <h1>
        Welcome to My First Next Js Project
      </h1>
      <CourseSearch getSearchResults={(results)=>setCourses(results)}/>
      <Courses courses={courses}/>

    </>
  )
}

export default HomePage









