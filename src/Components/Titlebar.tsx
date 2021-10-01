import React from 'react';
import { Stack, IconButton } from '@fluentui/react';

const Titlebar = () => {
    return (
        <Stack horizontal horizontalAlign="space-between" >
            <input type="text" className="title-name" placeholder="Untitled List"/>
            {/* <h1 className="title-name">Untitled List</h1> */}
            <Stack horizontal horizontalAlign="space-between" gap={20}>
                <h1 className="title-icon"><i className="ms-Icon ms-Icon--AddFriend" aria-hidden="true"></i></h1>
                <h1 className="title-icon"><i className="ms-Icon ms-Icon--More" aria-hidden="true"></i></h1>
            </Stack>
        </Stack>
    );
}

export default Titlebar;