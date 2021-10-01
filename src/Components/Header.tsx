import React from 'react';
import { Stack } from '@fluentui/react';

const Header = () => {
    return (
        <Stack horizontal horizontalAlign="space-between" >
            <span className="header">Microsoft To Do</span>
        </Stack>
    );
}

export default Header;