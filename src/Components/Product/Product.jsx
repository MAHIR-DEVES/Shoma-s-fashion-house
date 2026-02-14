import React, { useState, useRef } from 'react';
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  User,
  Phone,
  MapPin,
  CheckCircle,
  Tag,
  Package,
} from 'lucide-react';
import image1 from '../../assets/shari/1.jpeg';
import image2 from '../../assets/shari/2.jpeg';
import image3 from '../../assets/shari/3.jpeg';
import image4 from '../../assets/shari/4.jpeg';
import image5 from '../../assets/shari/5.jpeg';
import image6 from '../../assets/shari/6.jpeg';
import image7 from '../../assets/shari/7.jpeg';
import image8 from '../../assets/shari/8.jpeg';
import image9 from '../../assets/shari/9.jpeg';
import image10 from '../../assets/shari/10.jpeg';
import image11 from '../../assets/shari/11.jpeg';
import image12 from '../../assets/shari/12.jpeg';
import image13 from '../../assets/shari/13.jpeg';
import image14 from '../../assets/shari/14.jpeg';
import image15 from '../../assets/shari/15.jpeg';
import image16 from '../../assets/shari/16.jpeg';
import image17 from '../../assets/shari/17.jpeg';
import image18 from '../../assets/shari/18.jpeg';
import image19 from '../../assets/shari/19.jpeg';
import image20 from '../../assets/shari/20.jpeg';
import image21 from '../../assets/shari/21.jpeg';
import image22 from '../../assets/shari/22.jpeg';
import image23 from '../../assets/shari/23.jpeg';
import image24 from '../../assets/shari/24.jpeg';
import image25 from '../../assets/shari/25.jpeg';
import image26 from '../../assets/shari/26.jpeg';

const initialProducts = {
  Shari: [
    {
      id: 1,
      name: 'Batik shari original',
      price: 850,
      image: image1,
      sizes: [],
    },
    {
      id: 2,
      name: 'Chanderi silk.with blouse pis ',

      price: 650,
      image: image2,
      sizes: [],
    },
    {
      id: 3,
      name: 'Nakshi par half silk ',
      price: 450,
      image: image3,
      sizes: [],
    },
    {
      id: 4,
      name: 'Gorgeous eid collection ',
      price: 2050,
      image: image4,
      sizes: [],
    },
    {
      id: 5,
      name: 'Eid collection ',
      price: 2050,
      image: image5,
      sizes: [],
    },
    {
      id: 6,
      name: 'Eid collection ',
      price: 2050,
      image: image6,
      sizes: [],
    },
    {
      id: 7,
      name: 'VIP silk soft preimum quality with blouse ',
      price: 1450,
      image: image7,
      sizes: [],
    },
    {
      id: 8,
      name: 'Combo ',
      price: 1350,
      image: image8,
      sizes: [],
    },
    {
      id: 9,
      name: 'Chanderi silk with blouse',
      price: 680,
      image: image9,
      sizes: [],
    },
    {
      id: 10,
      name: 'Eid collection preimum quality ',
      price: 2450,
      image: image10,
      sizes: [],
    },
    {
      id: 11,
      name: 'Tanabana soft katan silk shari ',
      price: 750,
      image: image11,
      sizes: [],
    },
    {
      id: 12,
      name: 'Tanabana soft katan silk shari ',
      price: 750,
      image: image12,
      sizes: [],
    },
    {
      id: 13,
      name: 'Tanabana soft katan silk shari ',
      price: 750,
      image: image13,
      sizes: [],
    },
    {
      id: 14,
      name: 'Tanabana soft katan silk shari ',
      price: 750,
      image: image14,
      sizes: [],
    },
    {
      id: 15,
      name: 'Indian soft silk katan shari',
      price: 750,
      image: image15,
      sizes: [],
    },
    {
      id: 16,
      name: 'Indian soft silk katan shari',
      price: 750,
      image: image16,
      sizes: [],
    },
    {
      id: 17,
      name: 'Indian soft silk katan shari',
      price: 750,
      image: image17,
      sizes: [],
    },
    {
      id: 18,
      name: 'Indian soft silk katan shari',
      price: 750,
      image: image18,
      sizes: [],
    },
    {
      id: 19,
      name: 'Indian soft silk katan shari',
      price: 750,
      image: image19,
      sizes: [],
    },
    {
      id: 20,
      name: 'Indian soft silk katan shari',
      price: 750,
      image: image20,
      sizes: [],
    },
    {
      id: 21,
      name: 'Naksh par halk silk  ',
      price: 450,
      image: image21,
      sizes: [],
    },
    {
      id: 22,
      name: '',
      price: 450,
      image: image22,
      sizes: [],
    },
    {
      id: 23,
      name: 'Viral dull ',
      price: 350,
      image: image23,
      sizes: [],
    },
    {
      id: 24,
      name: 'Vip silk soft preimum quality batik silk ',
      price: 350,
      image: image24,
      sizes: [],
    },
    {
      id: 25,
      name: 'Vip silk soft preimum quality batik silk ',
      price: 350,
      image: image25,
      sizes: [],
    },
    {
      id: 26,
      name: 'Vip silk soft preimum quality batik silk ',
      price: 350,
      image: image26,
      sizes: [],
    },
  ],
};

function ProductPage() {
  const [cart, setCart] = useState([]);
  const [deliveryArea, setDeliveryArea] = useState('inside'); // inside | outside

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    number: '',
    address: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const checkoutRef = useRef(null);

  const addToCart = product => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      const newItem = {
        ...product,
        quantity: 1,
      };
      setCart([...cart, newItem]);
    }

    checkoutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const removeFromCart = id => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, qty) => {
    if (qty < 1) return;
    setCart(
      cart.map(item => (item.id === id ? { ...item, quantity: qty } : item)),
    );
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const deliveryCharge = deliveryArea === 'inside' ? 80 : 120;

  const grandTotal = totalPrice + deliveryCharge;

  const handleCustomerChange = e => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = () => {
    if (!customerInfo.name || !customerInfo.number || !customerInfo.address) {
      alert('Please fill your Name, Phone, and Address');
      return;
    }
    const generateWhatsAppMessage = () => {
      let message = `🛍️ *New Order Received* %0A%0A`;

      message += `👤 Name: ${customerInfo.name}%0A`;
      message += `📞 Phone: ${customerInfo.number}%0A`;
      message += `📍 Address: ${customerInfo.address}%0A%0A`;

      message += `📦 *Order Details:* %0A`;

      cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name}%0A`;
        message += `   Qty: ${item.quantity}%0A`;
        message += `   Price: ৳${item.price * item.quantity}%0A%0A`;
      });

      message += `💰 *Total Amount:* ৳ ${totalPrice}%0A`;
      message += `🚚 Delivery Charge: ${deliveryCharge}tk%0A`;
      message += `💵 * Total:* ৳ ${grandTotal}`;

      return message;
    };

    if (cart.length === 0) {
      alert('Cart is empty! Please select products.');
      return;
    }

    const whatsappNumber = '8801687762824';
    const message = generateWhatsAppMessage();

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappURL, '_blank');

    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      setCart([]);
      setCustomerInfo({ name: '', number: '', address: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen  pb-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 pt-6">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent mb-4">
            Premium শাড়ি কালেকশন
          </h1>
          <p className="text-gray-600 text-lg">
            হ্যান্ডপিক্ট কোয়ালিটি, সেরা দাম
          </p>

          {/* Cart Indicator */}
          {cart.length > 0 && (
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mt-4 border border-rose-100">
              <ShoppingCart className="text-rose-600" size={20} />
              <span className="font-semibold text-rose-700">
                {cart.length} items
              </span>
              <span className="text-gray-400">•</span>
              <span className="font-bold text-pink-600"> {totalPrice} TK</span>
            </div>
          )}
        </div>

        {/* Success Message */}
        {orderPlaced && (
          <div className="fixed top-4 right-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-slide-in">
            <div className="flex items-center gap-3">
              <CheckCircle size={24} />
              <div>
                <p className="font-bold">অর্ডার সফল হয়েছে!</p>
                <p className="text-sm opacity-90">আমরা শীঘ্রই যোগাযোগ করব</p>
              </div>
            </div>
          </div>
        )}

        {/* Product Categories */}
        {Object.keys(initialProducts).map(category => (
          <div key={category} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-md bg-gradient-to-r from-rose-500 to-pink-400">
                <Package className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">
                {category} কালেকশন
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-6">
              {initialProducts[category].map(product => (
                <div
                  key={product.id}
                  className="bg-white rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col border border-gray-100"
                >
                  {/* Product Image */}
                  <div className="h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-rose-50 to-pink-50 flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-3 sm:p-4 flex flex-col flex-1">
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-1 sm:mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Tag className="text-pink-500" size={12} />
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-rose-600">
                          {product.price} TK
                        </span>
                      </div>
                    </div>

                    {/* Spacer to push button to bottom */}
                    <div className="flex-1"></div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-gradient-to-r from-rose-600 to-pink-500 text-white font-semibold py-2 sm:py-3 rounded-lg hover:from-rose-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base mt-auto"
                    >
                      <ShoppingCart size={14} />
                      অর্ডার করুন
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Checkout Section */}
        <div
          ref={checkoutRef}
          className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
        >
          <div className="bg-gradient-to-r from-rose-600 to-pink-500 p-4 sm:p-6 text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-2 sm:gap-3">
              <ShoppingCart size={20} />
              চেকআউট
            </h2>
            <p className="text-white/80 text-sm sm:text-base mt-1 sm:mt-2">
              আপনার অর্ডার সম্পূর্ণ করুন
            </p>
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            {/* Cart Items */}
            {cart.length === 0 ? (
              <div className="text-center py-8 sm:py-12">
                <ShoppingCart
                  className="mx-auto text-gray-300 mb-3 sm:mb-4"
                  size={48}
                />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400 mb-1 sm:mb-2">
                  আপনার কার্ট খালি
                </h3>
                <p className="text-gray-500 text-sm sm:text-base">
                  শুরু করতে কিছু পণ্য যোগ করুন!
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                    আপনার অর্ডার ({cart.length} টি পণ্য)
                  </h3>

                  {cart.map(item => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 bg-rose-50 rounded-lg border border-rose-100"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start sm:items-center gap-3">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-rose-100 to-pink-100">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-800 text-sm sm:text-base line-clamp-1">
                              {item.name}
                            </h4>
                            <p className="text-rose-600 font-bold text-sm sm:text-base mt-1">
                              ৳ {item.price} × {item.quantity} = ৳{' '}
                              {item.price * item.quantity}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-4">
                        <div className="flex items-center gap-2 bg-white rounded-lg px-2 py-1 sm:px-3 sm:py-2 border border-gray-200">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="text-gray-600 hover:text-rose-600 transition-colors p-1"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-bold text-gray-800 text-sm sm:text-base min-w-[1.5rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="text-gray-600 hover:text-rose-600 transition-colors p-1"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 sm:p-3 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:shadow-md transition-shadow flex-shrink-0"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Info Form */}
                <div className="mb-6 sm:mb-8 md:mb-10 mt-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                    গ্রাহকের তথ্য
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-gray-700 font-medium text-sm sm:text-base">
                        <User size={16} />
                        আপনার নাম
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="আপনার নাম লিখুন"
                        className="w-full border border-gray-300 rounded-lg p-3 sm:p-4 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all text-sm text-black"
                        value={customerInfo.name}
                        onChange={handleCustomerChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-gray-700 font-medium text-sm sm:text-base">
                        <Phone size={16} />
                        ফোন নম্বর
                      </label>
                      <input
                        type="tel"
                        name="number"
                        placeholder="01XXXXXXXXX"
                        className="w-full border border-gray-300 rounded-lg p-3 sm:p-4 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all text-sm text-black"
                        value={customerInfo.number}
                        onChange={handleCustomerChange}
                      />
                    </div>

                    <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                      <label className="flex items-center gap-2 text-gray-700 font-medium text-sm sm:text-base">
                        <MapPin size={16} />
                        ডেলিভারি ঠিকানা
                      </label>
                      <input
                        type="text"
                        name="address"
                        placeholder="পুরো ঠিকানা এলাকাসহ"
                        className="w-full border border-gray-300 rounded-lg p-3 sm:p-4 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all text-sm text-black"
                        value={customerInfo.address}
                        onChange={handleCustomerChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-gray-700 font-medium text-sm sm:text-base">
                        <MapPin size={16} />
                        ডেলিভারি এলাকা
                      </label>

                      <select
                        value={deliveryArea}
                        onChange={e => setDeliveryArea(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-3 sm:p-4 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all text-sm text-black"
                      >
                        <option value="inside">ঢাকার ভিতর (৮০ টাকা)</option>
                        <option value="outside">ঢাকার বাহিরে (১২০ টাকা)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Total and Order Button */}
                <div className="mt-6 sm:mt-8 p-4 sm:p-5 md:p-6 bg-gradient-to-r from-rose-50 to-white rounded-lg border border-rose-100">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6">
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                        মোট টাকার পরিমাণ
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base">
                        সব চার্জসহ
                      </p>
                    </div>

                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">
                      ৳ {grandTotal}
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">
                      ডেলিভারি চার্জ {deliveryCharge} টাকা
                    </p>

                    <button
                      onClick={handleOrderSubmit}
                      className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-rose-600 to-pink-500 text-white font-bold rounded-lg hover:from-rose-700 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base md:text-lg flex items-center justify-center gap-2"
                    >
                      <CheckCircle size={16} />
                      অর্ডার করুন
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default ProductPage;
