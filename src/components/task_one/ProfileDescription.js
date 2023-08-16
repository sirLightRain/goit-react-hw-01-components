export const Description = ({avatar, username, tag}) => {
    return (
        <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">Salvador, Brasil</p>
      </div>
    );
}