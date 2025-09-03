import React, {useState} from 'react';

const AI = () => {
    const [apps, setApps] = useState([
        {
            name:"Afdub.ai(African Language Dubbing)",
            link:"",
            llms:[
                "Demucs (Background noise isolation)",
                "pyannote/speaker-diarization-3.1 (Speaker segmentation)",
                "wav2vec2-large-robust-24-ft-age-gender (Gender identification)",
                "OpenAI Whisper (Speech transcription)",
                "Meta NLLB (Neural translation)",
                "Multiple TTS Engines (Voice synthesis)"
            ]
        },
        {
            name:"Maivo (EV Matching Marketplace)",
            link:"https://dev.maivo.co",
            llms:["Gemini 2.5 Flash", "DeepSeek R1"]
        },
        {
            name:"Afrowatch iOS",
            link:"https://testflight.apple.com/join/dHhPKSr6",
            llms:["Claude Sonnet 4.0"]
        }
    ])

    return (
        <div>
            <h2>A.I. Projects</h2>
            <p style={{fontSize:'16px'}}>Showcase of some Artificial Intelligence related projects.</p>
            
            <div className="row mt-5">
                    {
                        apps.map((app)=>{
                            return (
                                <div className="col-md-4">
                                    <div key={app.name} className='mb-5'>
                                        <h4>
                                            {app.link ? (
                                                <a style={{color:'black', textDecoration:'underline'}} href={app.link} target="_blank" rel="noopener noreferrer">
                                                    {app.name}
                                                </a>
                                            ) : (
                                                app.name
                                            )}
                                        </h4>
                                        <ol style={{textAlign:'center'}}>
                                            {app.llms.map((llm, idx) => (
                                                <li key={idx}>{llm}</li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    );
};

export default AI;