import { createClient } from "contentful"
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
    space: process.env.COONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: "recipe",
    })

    const paths = res.items.map(recipe => ({
        params: {
            slug: recipe.fields.slug,
        }
    }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {
    const res = await client.getEntries({
        content_type: "recipe",
        'fields.slug': params.slug, // Gets only one recipe because slug is a unique value.
    })

    return {
        props: {
            recipe: res.items[0],
            revalidate: 1,
        }
    }
}

export default function RecipeDetails({ recipe }) {
    const { featuredImage, title, cookingTime, ingredients, method } = recipe.fields
    return (
        <div>
            <div className="banner">
                <Image
                    src={`https:${featuredImage.fields.file.url}`}
                    width={featuredImage.fields.file.details.image.width}
                    height={featuredImage.fields.file.details.image.height}
                    alt={`The recipe image ${title}`}
                />
                <h2>{title}</h2>
            </div>
            <div className="info">
                <p>Takes about {cookingTime} sec/min to cook.</p>
                <h3>Ingredients: </h3>
                {/* {ingredients.map((ing, idx) => (
                    <span key={idx}>{ing}</span>
                ))} */}
            </div>
            <div className="method">
                <div>{documentToReactComponents(method)}</div>
            </div>

            <style jsx>{`
                h2,h3 {
                text-transform: uppercase;
                }
                .banner h2 {
                margin: 0;
                background: #eeeeee;
                display: inline-block;
                padding: 20px;
                position: relative;
                top: -60px;
                left: -10px;
                transform: rotateZ(-1deg);
                box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                }
                .info p {
                margin: 0;
                }
                .info span::after {
                content: ", ";
                }
                .info span:last-child::after {
                content: ".";
                }
            `}</style>

        </div>
    )
}