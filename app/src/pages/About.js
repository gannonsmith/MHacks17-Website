import './About.css';

function Panel({title, subtitle, other}) {
    return (
        <div className='Panel border'>
            <div className='panel-title'><b>{title}</b></div>
            <div className='panel-subtitle'>{subtitle}</div>
            <div className='panel-graphic'>{other}</div>
        </div>
    )
}

function About() {
    const who_we_are_panel = <Panel 
        title={'Who We Are'}
        subtitle={<>We are MHacks 17.<br></br>The world's premier hackathon.<br></br>Coming September xX, 2024.<br></br><br></br>We provide a platform for you to build, innovate, and change the world.</>}
        other={'crazy cool timeline'} />
    ;

    return (
        <div className='About'>
            {who_we_are_panel}
            <Panel title={'Who You Are'} subtitle={'hackers'} other={'crazy cool timeline'} />
        </div>
    )
}

export default About;