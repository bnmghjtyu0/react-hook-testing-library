import React, { useEffect } from 'react'
import Button from '../button'
const Home = ({ history }) => {
    useEffect(() => {
        history.push({
            pathname: '/',
            search: '?city=Taichung'
        })
    }, [])
    return (
        <div>
            <Button />
        </div>
    )
}
export default Home