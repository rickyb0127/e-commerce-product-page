import { useState } from "react";
import NavBar from "./components/NavBar";
import ProductView from "./components/ProductView";

function App() {
  const [showShoppingCartModal, setShowShoppingCartModal] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <>
      <div className="mobile:max-w-[none] tablet:max-w-[800px] desktop:max-w-[1200px] mobile:px-none tablet:px-8 desktop:px-8 mx-auto">
        <NavBar showShoppingCartModal={showShoppingCartModal} setShowShoppingCartModal={setShowShoppingCartModal} quantity={quantity} setQuantity={setQuantity} showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
      </div>
      <div className="flex" onClick={() => setShowShoppingCartModal(false)}>
        <div className="mobile:w-0 tablet:w-[8px] desktop:w-[8px]"></div>
        <div className="mobile:max-w-[100vw] tablet:max-w-[800px] desktop:max-w-[1200px] mobile:px-none tablet:px-8 desktop:px-8 mx-auto">
          <ProductView quantity={quantity} setQuantity={setQuantity} showLightbox={showLightbox} setShowLightbox={setShowLightbox} />
        </div>
        <div className="mobile:w-0 tablet:w-[8px] desktop:w-[8px]"></div>
      </div>
      {(showLightbox || showSideMenu) && <div className="absolute top-0 w-full overlay opacity-70 bg-black"></div>}
    </>
  )
}

export default App;