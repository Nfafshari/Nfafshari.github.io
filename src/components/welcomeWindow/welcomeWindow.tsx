import { Frame } from '@react95/core/Frame';
import { TitleBar } from '@react95/core/TitleBar';

import WelcomeWindowProps from './welcomeWindow.types';
import './welcomeWindow.css';

export default function WelcomeWindow (props: WelcomeWindowProps) {
    return (
        <Frame
            h='500px' 
            w='600px' 
            bgColor='$material'
            boxShadow={props.activeWindow ? '$out' : '$in'}
            padding='2px'
        >
            <TitleBar 
                title='Welcome!'
                id='Welcome-titlebar'
                active={props.activeWindow}
            >
                <TitleBar.Minimize />
                <TitleBar.Close />
            </TitleBar>
        </Frame>
    );
}