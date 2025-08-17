// components/ProductList.jsx
export const ProductList = ({ products, clickedButtons, onClickAddCart, onClickBuy }) => {
    return (
      <div className="product-list-page">
        <header className="product-list-header">
          <h1>신발 상품 목록</h1>
          <p>현재 {products.length}개의 상품이 있습니다.</p>
        </header>
        
        <section className="product-list-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.brand} className="product-image" />
                <div className="product-brand">{product.brand}</div>
                <div className="product-desc">{product.desc}</div>
                <div className="product-price">{product.price.toLocaleString()}원</div>
                <div className="button-container">
                    <button 
                        className={`cart-btn ${clickedButtons.has(product.id) ? 'clicked' : ''}`}
                        onClick={() => onClickAddCart(product.id)}>
                        {clickedButtons.has(product.id) ? '담음' : '담기'}
                    </button>
                    <button className='buy-btn' onClick={() => onClickBuy(product.id)}>
                        { '구매' }
                    </button>
                </div>
            </div>
          ))}
        </section>
      </div>
    )
  }