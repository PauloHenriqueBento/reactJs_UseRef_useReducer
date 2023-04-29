import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export default function Info(){
    const dados = useContext(UserContext)
    const nome = dados.name.first + ' ' + dados.name.last
    const email = dados.email
    const dataNasc = dados.dob.date
    const localidade = dados.location.city
    const telefone = dados.phone
    return (<ul>
        <li>Nome: {nome}</li>
        <li>Email: {email}</li>
        <li>Data Nascimento: {dataNasc}</li>
        <li>Cidade Nascimento: {localidade}</li>
        <li>telefone: {telefone}</li>
    </ul>)
}