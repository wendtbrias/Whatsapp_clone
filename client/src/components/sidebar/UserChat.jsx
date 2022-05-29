import Avatar from "@mui/material/Avatar";

const UserChat = () => {
    return (
        <div className="user-chat">
            <Avatar
                alt="Remy Sharp"
                src="https://unsplash.com/photos/AJIqZDAUD7A/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8fHwxNjUzMDE0Nzc1&force=true&w=640"
                sx={{ width: 46, height: 46 }}
            />
            <div className="chat-data">
                <h4>Wenditiberias</h4>
                <p>Lorem ipsum dolor id property specifies how overflowed content</p>
            </div>
        </div>
    )
}

export default UserChat;