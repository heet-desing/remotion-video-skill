import React from 'react';
import {registerRoot, Composition} from 'remotion';
import {Video, duration, data} from './video';

registerRoot(() => <Composition id="Video" component={Video} width={data.width} height={data.height} fps={data.fps} durationInFrames={duration}/>);
