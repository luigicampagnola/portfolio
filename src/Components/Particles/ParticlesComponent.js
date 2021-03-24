import React from 'react';
import ParticlesConfig from './ParticlesConfig';
import Particles from 'react-particles-js';

export default function ParticleComponent(){
    return(
        <Particles params={ParticlesConfig}></Particles>
    )
}