import './Title.scss';

function Title({ titletext, titleclasses }) {
    return <h3 className={titleclasses}>{titletext}</h3>;
}

export default Title;
