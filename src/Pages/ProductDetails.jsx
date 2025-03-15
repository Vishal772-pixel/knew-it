import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductContext';

export default function ProductDetails() {
  const { id } = useParams();
  const { products } = useProducts();
  const { addToCart } = useCart();
  
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} has been added to your cart.`);
  };

  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="container py-8">
        <div className="flex gap-8">
          <div className="w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg text-secondary-600 mb-4">
              {product.description}
            </p>
            <p className="text-lg font-bold mb-2">${product.price}</p>
            <p className="text-sm text-secondary-600 mb-4">
              Material: {product.material}
            </p>
            <Button variant="primary" className="w-full mb-4" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Link to="/">
              <Button variant="outline" className="w-full">
                Back to Listing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}