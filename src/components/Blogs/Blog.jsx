import React, { useState } from 'react';


const Blog = () => {
    const[blogs, setBlogs] = useState([
        {
            blogName:"Migrating legacy services to a modern developer portal: A technical guide to Backstage integration",
            description:"I show how to build an automated script to migrate services from an existing internal service catalogue to a modern internal developer portal (IDP) like Backstage. I'll also outline strategies to help drive adoption across your organization, along with tips for addressing both the cultural and technical roadblocks you might encounter along the way.",
            link:"https://backstage.io/blog/2025/08/08/migrating-legacy-services-to-a-modern-developer-portal",
            feature:"Spotify (Backstage)",
            companyLogo:'https://backstage-spotify-com.spotifycdn.com/_next/static/media/twitter-summary-default.e17fd878.png',
            companyLogoWidth:'60px'
        },
        {
            blogName:"Scaling and Mainting NYT's Incident Management API",
            description:"Research and expertise in building scalable and maintainable APIs for reliable systems and incident management.",
            link:"https://medium.com/@timesopen/scaling-and-maintaining-the-new-york-times-incident-management-api-aa50dffd24b7",
            feature:"The New York Times",
            companyLogo:'https://1000logos.net/wp-content/uploads/2017/04/Symbol-New-York-Times.png',
            companyLogoWidth:'40px'
        }
    ])

    return (
        <div>
            <h1>Blog</h1>
            <p>Welcome to the blog section!</p>

            <div className="container">
                <div className="row mt-5">
                    {
                        blogs.map((blog)=>{
                            return(
                                <div className="col-md-4">
                                    <a href={blog.link} target='_blank'>
                                        <div className="card py-3 px-2 mb-4" style={{color:'black'}}>
                                            <h5 className="card-title">
                                                {blog.blogName}
                                            </h5>
                                            <div className="card-body border-top">
                                                {blog.description}
                                            </div>
                                            <div className='border-top pt-2'>
                                                <img style={{
                                                    width:`${blog.companyLogoWidth}`,
                                                    borderRadius:'10px'
                                                }} 
                                                src={blog.companyLogo} alt="company_logo"
                                                />
                                                {blog.feature}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;