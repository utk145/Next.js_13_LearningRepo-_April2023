// This isnt having an UI in the website but it is just to show how we can get data from body.

import courses from './data.json';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    return NextResponse.json(courses);
}


export async function POST(request) {
    const { title, description, level, link } = await request.json();
    const newCourse = {
        id: uuidv4, title, description, level, link
    };

    // console.log(title, description, level, link);
    courses.push(newCourse);

    return NextResponse.json(courses);
}