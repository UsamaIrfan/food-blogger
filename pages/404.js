import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function NotFound() {

    const router = useRouter()

    const [counter, setcounter] = useState(5)

    React.useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 5000)
    }, [])

    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Oops! That page cannot be found.</h2>
            <p>Redirecting to the <Link href="/">Home Page</Link> for more delicious goodness.</p>

            <style jsx>{`
                .not-found {
                    background: #eee;
                    padding: 30px;
                    max-width: 900px;
                    margin: 0 auto;
                    box-shadow: 1px 3px 5px rgba(0,0,0,0.1)
                }
                h1 {
                    font-size: 3rem;
                }
            `}</style>

        </div>
    )
}

export default NotFound
