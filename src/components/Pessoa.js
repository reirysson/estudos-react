function Pessoa({nome, foto, idade, profissao}) {
    return (
        <div>
            <h2>Nome: {nome}</h2>
            <img src={foto} alt="Nome da pessoa"/>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}

export default Pessoa