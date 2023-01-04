import * as React from 'react'

const wineImage = {
    width: '5rem'
}
export default function Wine() {    
    /*
    1. Fetch from https://api.sampleapis.com/coffee/hot

    2. Trsnsform into JSX
    */
    let items = []
    let [wineTitles, setwineTitles] = React.useState([])

    React.useEffect(async () => {
        // Run once after the page finished loading
        // Fetch from https://api.sampleapis.com/coffee/hot
        let res = await fetch('https://api.sampleapis.com/wines/reds')
        let wines = await res.json()
        for (let i = 0; i < wines.length; i++) {
            console.log(wines[i].title)
            items.push(<li>
                <div style={{  width:"40rem",overflow: "hidden" }} >
                    <div style={{ width: "5rem", float: "left" }}> <img style={wineImage} src={wines[i].image} /> </div>
                    <div >  <b>{wines[i].winery}</b> - {wines[i].wine}</div>
                </div>
            </li >)
        }

        setwineTitles(items)
    }, [])

    return (
        <>
            <h1>wine</h1>
            <ul>
                {wineTitles}
            </ul>
        </>
    )
}
