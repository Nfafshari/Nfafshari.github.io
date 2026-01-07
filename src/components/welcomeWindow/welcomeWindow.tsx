import { Frame } from '@react95/core/Frame';
import { TitleBar } from '@react95/core/TitleBar';

import WelcomeWindowProps from './welcomeWindow.types';
import './welcomeWindow.css';

export default function WelcomeWindow (props: WelcomeWindowProps) {
    function closeWindow () {
        props.setShowWindow(false);
    }

    function minimizeWindow () {

    }

    if (props.showWindow) {
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
                    <TitleBar.Minimize 
                        onClick={() => {
                            minimizeWindow()
                        }}
                    />
                    <TitleBar.Close 
                        onClick={() => {
                            closeWindow()
                        }}
                    />
                </TitleBar>

                <div className='WelcomeWindow-main-text'>
                    <h1> Welcome to my Portfolio! </h1>
                    <p> My Name is Nathen Afshari. </p>
                </div>
            </Frame>
        );
    }
}