import "./sidebar.css";
import Search from "./search";
import UserChat from "./UserChat";
import IconButton from '@mui/material/IconButton';
import Avatar from "@mui/material/Avatar";
//Icon - Import
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Sidebar = () => {
	return (
		<div className="sidebar">
		 <div className="user-profile">
			 <div className="avatar">
				 <Avatar>H</Avatar>
			 </div>
			 <div className="icon_button">
				 <IconButton>
					 <DonutLargeIcon fontSize="small"/>
				 </IconButton>
				 <IconButton>
					 <ChatIcon fontSize="small"/>
				 </IconButton>
				 <IconButton>
					 <MoreVertIcon fontSize="small"/>
				 </IconButton>
			 </div>
		 </div>
			<Search/>
			<div className="user">
				<h2>Add new chat</h2>
				<div className="user-section">
					<UserChat/>
					<UserChat/>
					<UserChat/>

				</div>
			</div>
		</div>
	)
}

export default Sidebar;