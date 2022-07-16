const Post = ({name, goal, creatorName,description}) => {
    return (
        <tr>
        <td>{name}</td>
        <td>{goal}</td>
        <td>{creatorName}</td>
        <td>{description}</td>
        
         </tr> 
    )
}

export default Post;
