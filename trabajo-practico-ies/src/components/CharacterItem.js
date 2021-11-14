


export default function CharacterItem({ character }){
    return <tr>
        <td>{character.id}</td>
        <td>{character.name}</td>
        <td>{character.status}</td>
        <td>{character.species}</td>
        <td>{character.type}</td>
        <td>{character.gender}</td>
        <td><img src={character.image} /></td>
    </tr>
}