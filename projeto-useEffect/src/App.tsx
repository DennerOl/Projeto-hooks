import { useEffect, useState } from 'react';

function App() {

  const [productId, setProductId] = useState(1);
  const [prod, setProd] = useState();

  useEffect(() => {
    setProd(findProduct(productId));
  }, [productId])

  function handleClick() {

    setProductId(2);

  }

  return (
    <>

      <h2>{prod.name}</h2>
      <p>{prod.price}</p>

      <br />
      <button onClick={handleClick}>proximo produto</button>
    </>

  )
}

export default App
