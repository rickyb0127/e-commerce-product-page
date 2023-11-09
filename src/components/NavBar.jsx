import cartIcon from '../assets/images/icon-cart.svg';
import avatarImg from '../assets/images/image-avatar.png';
import productThumbnail from '../assets/images/image-product-1-thumbnail.jpg';
import deleteIcon from '../assets/images/icon-delete.svg';
import menuIcon from '../assets/images/icon-menu.svg';
import closeIcon from '../assets/images/icon-close.svg';

function NavBar(props) {
  const {showShoppingCartModal, setShowShoppingCartModal, quantity, setQuantity, showSideMenu, setShowSideMenu} = props;
  
  return (
    <nav id="nav" className="border-b-2 border-light-grayish-blue mobile:px-[30px] tablet:px-0 desktop:px-0">
      <div className="relative flex h-[100px] items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="flex items-center">
            <div onClick={() => {setShowSideMenu(true)}} className="mobile:flex tablet:hidden desktop:hidden h-[20px] cursor-pointer pr-[30px]">
              <img src={menuIcon} />
            </div>
            <div className="font-bold text-[28px]">sneakers</div>
          </div>
          <div className="mobile:hidden tablet:flex desktop:flex h-[102px] gap-10 text-dark-grayish-blue cursor-pointer">
            <div className="flex h-full hover:border-b-[5px] border-orange hover:text-black pt-[40px]">Collections</div>
            <div className="flex h-full hover:border-b-[5px] border-orange hover:text-black pt-[40px]">Men</div>
            <div className="flex h-full hover:border-b-[5px] border-orange hover:text-black pt-[40px]">Women</div>
            <div className="flex h-full hover:border-b-[5px] border-orange hover:text-black pt-[40px]">About</div>
            <div className="flex h-full hover:border-b-[5px] border-orange hover:text-black pt-[40px]">Contact</div>
          </div>
          {showSideMenu &&
            <div className="mobile:flex tablet:hidden desktop:hidden absolute flex-col z-[99999] pt-[25px] pl-[25px] w-[75%] bg-white left-[-29px] top-0 h-[100vh] gap-6">
              <div className="flex text-dark-grayish-blue pb-[20px] cursor-pointer">
                <img onClick={() => {setShowSideMenu(false)}} src={closeIcon} />
              </div>
              <div className="flex font-bold cursor-pointer">Collections</div>
              <div className="flex font-bold cursor-pointer">Men</div>
              <div className="flex font-bold cursor-pointer">Women</div>
              <div className="flex font-bold cursor-pointer">About</div>
              <div className="flex font-bold cursor-pointer">Contact</div>
            </div>
          }
        </div>
        <div className="flex items-center gap-10">
          <div onClick={() => setShowShoppingCartModal(!showShoppingCartModal)} className="relative flex cursor-pointer w-[22px] h-20px">
            <img id="cart-icon" src={cartIcon} />
            {quantity > 0 &&
              <div className="absolute flex top-[-7px] right-[-6px] h-[14px] w-[18px] items-center justify-center rounded-full bg-orange text-white text-[8px]">{quantity}</div>
            }
          </div>
          <div className="flex w-[45px] h-[45px] items-center justify-center rounded-full hover:border-2 border-orange">
            <img className="cursor-pointer w-[42px] h-[42px]" src={avatarImg} />
          </div>
        </div>
        {showShoppingCartModal && <div id="cart-dropdown" className="flex-col absolute top-[100px] right-0 z-[10000] w-[350px] bg-white rounded-md shadow-lg">
          <div className="flex h-[75px] p-[20px] items-center font-bold border-b-2 border-light-grayish-blue">
            Cart
          </div>
          {quantity > 0 ?
            <>
              <div className="flex h-[75px] p-[20px] text-dark-grayish-blue items-center justify-between">
                <div className="flex w-[50px]">
                  <img className="rounded-md" src={productThumbnail} />
                </div>
                <div className="flex flex-col">
                  <div className="flex">Fall Limited Edition Sneakers</div>
                  <div className="flex">
                    <div>$125.00 x</div>
                    <div className="px-[4px]">{quantity}</div> 
                    <div className="text-black font-bold">{`$${(quantity * 125).toFixed(2)}`}</div>
                  </div>
                </div>
                <div onClick={() => setQuantity(0)} className="flex h-[18px] w-[15px]">
                  <img className="cursor-pointer" src={deleteIcon} />
                </div>
              </div>
              <div className="flex p-[20px] items-center">
                <button className="flex items-center justify-center h-[55px] text-white bg-orange w-full rounded-md">Checkout</button>
              </div>
            </> :
            <div className="flex h-[200px] text-dark-grayish-blue items-center justify-center mx-auto">
              <div>Your cart is empty.</div>
            </div>
          }
        </div>}
      </div>
    </nav>
  )
}

export default NavBar;