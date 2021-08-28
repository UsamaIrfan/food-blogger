import Link from 'next/link';
import React from 'react'
import Image from "next/image";

function RecipeCard({ recipe }) {

    const { title, slug, cookingTime, thumbnail } = recipe;

    return (
        <div className="card">
            <div className="featured">
                <Image
                    src={`https:${thumbnail.fields.file.url}`}
                    width={thumbnail.fields.file.details.image.width}
                    height={thumbnail.fields.file.details.image.height}
                    alt={`food picture delicious ${title}`}
                    className="recipe-card-image"
                />
            </div>
            <div className="content">
                <div className="info">
                    <h4>{title}</h4>
                    <p>Take approx {cookingTime} mins/hours to make</p>
                </div>
                <div className="actions">
                    <Link href={`/recipes/${slug}`}><a>Cook this</a></Link>
                </div>
            </div>

            <style jsx>{`
                .content {
                    background: #eeeeee;
                    box-shadow: 1px 3px 8px rgba(0,0,0,0.2);
                    margin: 0;
                    position: relative;
                    top: -40px;
                    border-radius: 5px;
                    overflow: hidden;
                    left: -10px;
                }
                .featured Image {
                    object-fill: cover;
                    width: 100%;
                    height: 100%;
                }
                .recipe-card-image {
                    object-fill: cover;
                    width: 100%;
                    height: 100%;
                }
                .info {
                    padding: 16px;
                }
                .info h4 {
                    margin: 4px 0;
                    text-transform: uppercase;
                }
                .info p {
                    margin: 0;
                    color: #777;
                }
                .actions {
                    margin-top: 20px;
                    display: flex;
                    justify-content: flex-end;
                }
                .actions a {
                    color: #fff;
                    background: #f01b29;
                    padding: 16px 24px;
                    text-decoration: none;
                }
                @media screen and (max-width: 960px) {
                    .info {
                      padding: 10px;
                    }
                    .actions {
                        margin-top: 10px;
                        display: flex;
                        justify-content: flex-end;
                    }
                    .actions a {
                        color: #fff;
                        background: #f01b29;
                        padding: 12px 18px;
                        text-decoration: none;
                    }
                  }
            `}</style>

        </div>
    )
}

export default RecipeCard
