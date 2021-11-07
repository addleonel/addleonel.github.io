import React from 'react';

// components
import PostPreview from './PostPreview';

const AllPosts: React.FC = () => {
    return (
        <React.Fragment>
            <main className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <h2 style={{marginBottom: "30px"}}>All publications</h2>
                        <PostPreview 
                            title="Full-Text Search | Django | Postgres"
                            content="Full-text search refers to techniques for searching a single computer-stored document or a collection in a full-text database ..."
                            date="Published On June 5, 2021"
                        />
                    </div>	
                </div>
            </main>
        </React.Fragment>
    )
}

export default AllPosts;