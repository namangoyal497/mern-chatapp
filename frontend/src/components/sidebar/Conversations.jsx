import Conversation from "./Conversation";
const Conversations = () => {
    // const { loading, conversations } = useGetConversations();
	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{/* {conversations.map((conversation, idx) => ( */}
				<Conversation/>
                <Conversation/>
				<Conversation/>

			{/* ))} */}

			{/* {loading ? <span className='loading loading-spinner mx-auto'></span> : null} */}
		</div>
	);
}

export default Conversations