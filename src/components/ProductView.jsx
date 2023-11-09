import { useState } from 'react';
import image1 from '../assets/images/image-product-1.jpg';
import image2 from '../assets/images/image-product-2.jpg';
import image3 from '../assets/images/image-product-3.jpg';
import image4 from '../assets/images/image-product-4.jpg';
import thumbnail1 from '../assets/images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../assets/images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../assets/images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../assets/images/image-product-4-thumbnail.jpg';
import cartIcon from '../assets/images/icon-cart.svg';
import minusIcon from '../assets/images/icon-minus.svg';
import plusIcon from '../assets/images/icon-plus.svg';
import closeIcon from '../assets/images/icon-close.svg';
import previousIcon from '../assets/images/icon-previous.svg';
import nextIcon from '../assets/images/icon-next.svg';

function ProductView(props) {
  const {quantity, setQuantity, showLightbox, setShowLightbox} = props;

  const products = [
    {
      id: 1,
      fullImg: image1,
      thumbnail: thumbnail1
    },
    {
      id: 2,
      fullImg: image2,
      thumbnail: thumbnail2
    },
    {
      id: 3,
      fullImg: image3,
      thumbnail: thumbnail3
    },
    {
      id: 4,
      fullImg: image4,
      thumbnail: thumbnail4
    }
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [localQuantity, setLocalQuantity] = useState(quantity);

  const thumbnailClicked = (product) => {
    if(product.id !== selectedProduct.id) {
      setSelectedProduct(product);
    }
  };

  const increaseQuantity = () => {
    if(localQuantity < 98) {
      const updatedQuantity = localQuantity + 1;

      setLocalQuantity(updatedQuantity);
    }
  };

  const decreaseQuantity = () => {
    if(localQuantity > 0) {
      const updatedQuantity = localQuantity - 1;

      setLocalQuantity(updatedQuantity);
    }
  };

  const selectPreviousProduct = () => {
    const nextId = selectedProduct.id > 1 ? selectedProduct.id - 1 : products.length;
    const updatedSelectedProduct = products[nextId - 1];

    setSelectedProduct(updatedSelectedProduct);
  };

  const selectNextProduct = () => {
    const nextId = selectedProduct.id === products.length ? 1 : selectedProduct.id + 1;
    const updatedSelectedProduct = products[nextId - 1];

    setSelectedProduct(updatedSelectedProduct);
  };

  const thumbnailView = products.map((product) => {
    return (
      <div key={product.id} onClick={() => {thumbnailClicked(product)}} className={`flex bg-white rounded-xl cursor-pointer ${product.id === selectedProduct.id ? "border-[2px] border-orange" : ""}`}>
        <img className={`${product.id === selectedProduct.id ? "rounded-lg opacity-30" : "rounded-xl hover:opacity-30"}`} src={product.thumbnail} />
      </div>
    )
  });

  return (
    <div className="relative flex mobile:flex-col tablet:flex-row desktop:flex-row items-center mobile:pt-0 tablet:pt-[80px] desktop:pt-[80px] mobile:gap-[20px] tablet:gap-32 desktop:gap-32">
      <div className="mobile:hidden tablet:flex desktop:flex flex-col w-[50%] gap-[30px]">
        <div className="flex">
          <img onClick={() => {setShowLightbox(true)}} className="rounded-xl cursor-pointer" src={selectedProduct.fullImg} />
        </div>
        <div className="flex gap-[30px]">
          {thumbnailView}
        </div>
      </div>
      <div className="mobile:flex tablet:hidden desktop:hidden flex-col w-full max-w-[500px]">
        <div className="relative flex">
          <div className="absolute top-[50%] left-[15px] translate-y-[-50%]">
            <div onClick={() => {selectPreviousProduct()}} className="flex h-[50px] w-[50px] rounded-full cursor-pointer bg-white items-center justify-center group">
              <img className="group-hover:orange-svg" src={previousIcon} />
            </div>
          </div>
          <img src={selectedProduct.fullImg} />
          <div onClick={() => {selectNextProduct()}} className="absolute top-[50%] right-[15px] translate-y-[-50%]">
            <div className="flex h-[50px] w-[50px] rounded-full cursor-pointer bg-white items-center justify-center group">
              <img className="group-hover:orange-svg" src={nextIcon} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mobile:w-full tablet:w-[50%] desktop:w-[50%] mobile:max-w-[500px] tablet:max-w-none desktop:max-w-none mobile:px-[30px] tablet:px-0 desktop:px-0 justify-center gap-[10px]">
        <div className="flex text-orange text-[14px] font-semibold">SNEAKER COMPANY</div>
        <div className="flex text-[38px] font-bold leading-[1.2]">Fall Limited Edition Sneakers</div>
        <div className="flex py-[10px]">
          <p className="text-[16px] text-dark-grayish-blue">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        </div>
        <div className="flex mobile:flex-row tablet:flex-col desktop:flex-col mobile:items-center tablet:items-start desktop:items-start justify-between">
          <div className="flex items-center gap-[10px]">
            <div className="flex text-[28px] font-semibold">$125.00</div>
            <div className="flex px-[8px] py-[2px] bg-pale-orange rounded-md text-orange">50%</div>
          </div>
          <div className="flex line-through text-grayish-blue font-semibold">$250.00</div>
        </div>
        <div className="flex mobile:flex-col tablet:flex-row desktop:flex-row items-center gap-[18px] pt-[20px]">
          <div className="flex h-[55px] mobile:w-full tablet:w-[140px] desktop:w-[140px] mobile:max-w-[450px] tablet:max-w-none desktop:max-w-none bg-light-grayish-blue rounded-md justify-between items-center">
            <div onClick={() => {decreaseQuantity()}} className="flex w-[40px] h-[100%] items-center justify-center cursor-pointer">
              <img className="w-[15px] h-[4px]" src={minusIcon} />
            </div>
            <div className="flex font-semibold">{localQuantity}</div>
            <div onClick={() => {increaseQuantity()}} className="flex w-[40px] h-[100%] items-center justify-center cursor-pointer">
              <img className="w-[14px] h-[14px]" src={plusIcon} />
            </div>
          </div>
          <div className="flex h-[55px] mobile:w-full tablet:w-[280px] desktop:w-[280px] mobile:max-w-[450px] tablet:max-w-none desktop:max-w-none text-white">
            <button onClick={() => {setQuantity(localQuantity)}} className="flex items-center justify-center gap-[15px] hover:opacity-50 bg-orange w-full rounded-md shadow-orange">
              <img className="white-svg h-[16px]" src={cartIcon} />
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {showLightbox &&
        <div className="absolute flex flex-col z-[99999] top-[20px] left-[50%] translate-x-[-50%] w-[550px] h-[600px] gap-[25px]">
          <div className="flex justify-end">
            <img onClick={() => {setShowLightbox(false)}} className="h-[25px] white-svg cursor-pointer hover:orange-svg" src={closeIcon} />
          </div>
          <div className="relative flex">
            <div className="absolute top-[50%] left-[-25px] translate-y-[-50%]">
              <div onClick={() => {selectPreviousProduct()}} className="flex h-[50px] w-[50px] rounded-full cursor-pointer bg-white items-center justify-center group">
                <img className="group-hover:orange-svg" src={previousIcon} />
              </div>
            </div>
            <img className="rounded-xl" src={selectedProduct.fullImg} />
            <div onClick={() => {selectNextProduct()}} className="absolute top-[50%] right-[-25px] translate-y-[-50%]">
              <div className="flex h-[50px] w-[50px] rounded-full cursor-pointer bg-white items-center justify-center group">
                <img className="group-hover:orange-svg" src={nextIcon} />
              </div>
            </div>
          </div>
          <div className="flex px-[30px] gap-[25px]">
            {thumbnailView}
          </div>
        </div>
      }
    </div>
  )
}

export default ProductView;