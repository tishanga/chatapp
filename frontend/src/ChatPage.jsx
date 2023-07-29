import React from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    
    return (
        <div style={{ height: '100vh'}}>
            <PrettyChatWindow
                    projectId="7831392d-abc9-4759-8c74-956d7e44c2e9"
                    username= {props.user.username}
                    secret={props.user.secret}
                    style={{ height: '100%' }}
                    />
        </div>
      )

}

export default ChatsPage;