import Item from './Item'

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Tesla"/>
                <Item marca="SpaceX" />
            </ul>
        </>
    )
}

export default List