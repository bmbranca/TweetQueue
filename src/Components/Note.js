import { MdDeleteForever } from 'react-icons/md';



const Note = ({ id, text, date, handleDeleteNote, tweetNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
            <button className="tweet-button" onClick={() => tweetNote(id)}>
				Tweet
			</button>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;