import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/PostPreview.scss';

interface props {
    cover?: string;
    title: string;
    content: string;
    date: string;
}

const PostItem: React.FC<props> = ({cover, title, content, date}) => {
    return (
        <section className="post-preview">
            <Link className="post-link" to="/posts/full-text-search-django-postgress">
                {cover && <img className="post-cover" src={cover} alt="cover" />}
                <h3 className="post-title">
                    {title}
                </h3>
                <p className="post-subtitle">
                    {content}
                </p>
            </Link>
            <p className="post-meta">
                {date}
            </p>
        </section>
    )
}

export default PostItem;