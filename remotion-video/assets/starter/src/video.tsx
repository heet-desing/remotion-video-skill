import React from 'react';
import {AbsoluteFill, Audio, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import data from './video.json';
export {data};
export const duration = data.scenes.reduce((n,s)=>n+s.frames,0) - Math.max(0,data.scenes.length-1)*data.transitionFrames;
if (!data.scenes.length || data.scenes.some(s=>s.frames<=data.transitionFrames) || data.transitionFrames<1) throw new Error('Scenes must exceed the positive transition duration');
if (data.captions.some(c=>c.start<0 || c.end<=c.start || c.end>duration)) throw new Error('Invalid caption timing');

const Scene = ({scene}:{scene:typeof data.scenes[number]}) => {
  const frame=useCurrentFrame();
  const {fps,width,height}=useVideoConfig();
  const enter=spring({frame,fps,config:{damping:200}});
  const portrait=height>width;
  return <AbsoluteFill style={{background:scene.color,color:'white',fontFamily:'Arial, sans-serif',padding:'8%',justifyContent:'center'}}>
    {scene.image && <Img src={staticFile(scene.image)} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:0.3}}/>}
    <div style={{position:'relative',transform:`translateY(${(1-enter)*35}px)`,opacity:enter}}>
      <div style={{width:90,height:8,background:'#73ead0',marginBottom:36}}/>
      <h1 style={{fontSize:portrait?76:96,lineHeight:1.08,margin:0,maxWidth:1400}}>{scene.title}</h1>
      <p style={{fontSize:portrait?42:48,lineHeight:1.35,maxWidth:1200}}>{scene.body}</p>
    </div>
  </AbsoluteFill>;
};

const Captions = () => {
  const f=useCurrentFrame();
  const cue=data.captions.find(c=>f>=c.start && f<c.end);
  return cue ? <AbsoluteFill style={{justifyContent:'flex-end',alignItems:'center',padding:'0 7% 9%',pointerEvents:'none'}}><div style={{fontFamily:'Arial, sans-serif',fontSize:40,lineHeight:1.3,color:'white',background:'#000d',padding:'14px 24px',borderRadius:12,textAlign:'center',maxWidth:'100%'}}>{cue.text}</div></AbsoluteFill> : null;
};

export const Video = () => <AbsoluteFill>
  <TransitionSeries>{data.scenes.map((scene,i)=><React.Fragment key={i}>
    {i>0 && <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames:data.transitionFrames})}/>}
    <TransitionSeries.Sequence durationInFrames={scene.frames}><Scene scene={scene}/></TransitionSeries.Sequence>
  </React.Fragment>)}</TransitionSeries>
  {data.voiceover && <Audio src={staticFile(data.voiceover)}/>}
  {data.music && <Audio src={staticFile(data.music)} loop volume={f=>interpolate(f,[0,20,duration-30,duration],[0,0.12,0.12,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}/>}
  <Captions/>
</AbsoluteFill>;
