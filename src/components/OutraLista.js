function OutraLista({ itens }) {
    return (
        <>
            <h3>Lista de coisas boas:</h3>
            {itens.length > 0 ? (
                itens.map((item, index) => ( /*Index é o índice do elemento, mas o recomendado é usar o id, aqui é só pra não apresentar erro*/
                <p key={index}>{item}</p>
            ))) : (
                <p>Não há itens na lista</p> /*Aqui é o else*/
            )} 
        </>
    )
}

export default OutraLista