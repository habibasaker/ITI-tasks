function Card({ product }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow h-100">
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top"
          style={{ height: "250px", objectFit: "cover" }}
        />

        <div className="card-body text-center">
          <h5>{product.name}</h5>
          <p className="text-success fw-bold">
            ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;