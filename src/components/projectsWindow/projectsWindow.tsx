import { useState } from 'react';
import { Frame } from '@react95/core/Frame';
import { TitleBar } from '@react95/core/TitleBar';
import { Button } from '@react95/core/Button';
import { Tabs } from '@react95/core/Tabs';
import { Tab } from '@react95/core/Tab';
import { Fieldset } from '@react95/core/Fieldset';
import { Checkbox } from '@react95/core/Checkbox';

import ProjectsWindowProps from './projectsWindow.types';
import './projectsWindow.css';

export default function ProjectsWindow (props: ProjectsWindowProps) {
    function closeWindow () {
        props.setShowWindow(false);
    }

    function minimizeWindow () {

    }

    if (props.showWindow) {
        return (
            <Frame
                h='600px' 
                w='700px' 
                bgColor='$material'
                boxShadow={props.activeWindow ? '$out' : '$in'}
                padding='2px'
            >
                <TitleBar 
                    title='Projects'
                    id='Projects-titlebar'
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
                
                <Tabs defaultActiveTab='Ideal Aerosmith' className='mt-2 ml-2'>
                    <Tab title='Ideal Aerosmith' className='h-[90%]'>
                        <h1 className='ExperienceWindow-h1 font-mono ml-2'> Ideal Aerosmith </h1>
                        <hr style={{ width: '95%', marginLeft: '10px'}}/>
                            <Frame h='450px' w='78%' bgColor='white' boxShadow='$in' className='mt-5 ml-2 p-2 overflow-y-scroll'>
                                <h2 className='ExperienceWindow-h2 font-mono'> Software Engineer Intern <span className='ExperienceWindow-span text-gray-500 text-xs'>[06/02/2025 - present]</span></h2>
                                <Fieldset legend='Skills' className='pl-2 pr-2 pb-2'>
                                    <div className='flex flex-col'>
                                        <Checkbox checked readOnly> React </Checkbox>
                                        <Checkbox checked readOnly> TypeScript/JavaScript </Checkbox>
                                        <Checkbox checked readOnly> Node.js </Checkbox>
                                        <Checkbox checked readOnly> Playwright testing </Checkbox>
                                        <Checkbox checked readOnly> Git </Checkbox>
                                        <Checkbox checked readOnly> Atlassian Products (Jira, Bitbucket, Sourcetree) </Checkbox>
                                    </div>
                                </Fieldset>
                                
                                <p className='ExperienceWindow-p mt-2'>This internship has been one of the most beneficial steps in my career. I was introduced to software design principles, agile methodologies, version control (of large code bases), and team work with other engineers. I am treated just like any other engineer and constantly learn new concepts.</p>
                                <p className='ExperienceWindow-p mt-2'>I mostly have been working on desktop applications using the above programming languages as well as Electron/Electron forge and webpack.</p>
                                <p className='ExperienceWindow-p mt-2'>Along with these applications I have learned how to integrate component libraries as well like MaterialUI and Bootstrap to create consistent interfaces.</p>
                            </Frame>
                        
                        <div className='absolute right-2 top-11 h-[89%] w-[21%] mt-14'>
                            <div className='flex items-center flex-col'>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </Frame>
        );
    }
}