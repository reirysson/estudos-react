import Item from './Item'

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Tesla" ano_lancamento={2022} />
                <Item marca="Volvo" ano_lancamento={2021} />
                <Item />
            </ul>
        </>
    )
}

export default List