 const Article = ({ category, headline, text, id }) =>
    <div key={id}>
        <h2>{headline}</h2>
        <p>{text}</p>
    </div>

export { Article };
    
