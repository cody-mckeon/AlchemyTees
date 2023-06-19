import { useParams } from 'react-router-dom';

function ProductScreen() {
  //Adding Routing to Product Page and displaying the slug of the URL
  const params = useParams();
  const { slug } = params;
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}

export default ProductScreen;
