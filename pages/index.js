import { createClient } from "contentful";
import RecipeCard from "../components/RecipeCard";

export const getStaticProps = async () => {

  const client = createClient({
    space: process.env.COONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({
    content_type: 'recipe',

  })

  return {
    props: {
      recipes: res.items,
      revalidate: 1,
    }
  }

}

export default function Recipes({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.sys.id}>
          <RecipeCard recipe={recipe.fields} />
        </div>
      ))}

      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
  )
}