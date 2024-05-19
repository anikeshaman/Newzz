import image from '../assets/news.jpg';

const Newsitem = ({ title = "No Title", description = "No Description", src, url }) => {
  return (
    <div className="card bg-light text-dark mb-3 d-inline-block my-3 mx-3 px-4 py-4" style={{ maxWidth: "300px" }}>
      <img src={src ? src : image} style={{ height: "200px", width: "100%", objectFit: "cover" }} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "Description not present"}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>
  );
};

export default Newsitem;
