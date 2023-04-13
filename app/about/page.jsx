import React from 'react'


// Now you can have custom meta data for eveery page for SEO by creating a layout.jsx file but you can write that in this page itself
export const metadata={
    title:'About Page'
};
// But its worth noting thatit will be there only for this route and won't reflect on team page.


const AboutPage = () => {
    return (
        <div>
            <h1>About My Projects</h1>
            <p>
                As I begin my journey into learning NeXT.js, I'm feeling a mix of excitement and apprehension. Excitement, because I know that NeXT.js is a powerful tool that will allow me to create dynamic, responsive web applications that will delight users. And apprehension, because I know that there will be many challenges to overcome along the way.<br /><br/>
                But I'm determined to push through those challenges and emerge on the other side as a skilled NeXT.js developer. I'm eager to dive into the world of server-side rendered React applications, and to explore the many advanced features that NeXT.js has to offer.<br /><br/>
                I know that this won't be an easy journey, but I'm ready for it. I'm ready to embrace the learning process, to make mistakes and learn from them, and to ultimately emerge as a confident and competent NeXT.js developer. Bring it on!
            </p>
        </div>
    )
}

export default AboutPage;

// Note that every custom route that you create is going to be a folder and NOT a file. Eg: /about/team 