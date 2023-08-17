'use client'
import React, { useState, useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

interface AppParticlesProps {
    skills?: boolean;
}

const AppParticles: React.FC<AppParticlesProps> = ({ skills}) => {

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async () => { }, []);
    return (
        <>
        {
            !skills ? <Particles
            className='w-full h-full translate-z-0 absolute inset-0 z-0'
            id='tsparticles'
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: { enable: false },
                background: {

                    color: {
                        value: ''
                    },

                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: 'push'
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse"
                        },
                        resize: true

                    },
                    modes: {
                        push: {
                            quantity: 90
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4

                        }
                    }
                },
                particles: {
                    color: {
                        value: '#e68e2e'
                    },
                    links: {
                        color: '#f5d393',
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1
                    },
                    collisions: {
                        enable: true
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce'
                        },
                        random: false,
                        speed: 1,
                        straight: false

                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800
                        },
                        value: 80

                    },
                    opacity: {
                        value: 0.5
                    },
                    shape: {
                        type: 'circle'
                    },
                    size: {
                        value: {
                            min: 1, max: 5
                        }
                    }

                },
                detectRetina: true
            }}

        /> :null
   
}
</>
    )
}

export default AppParticles

