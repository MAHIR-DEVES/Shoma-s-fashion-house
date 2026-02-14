import {} from 'react';

const Slider = () => {
  const bannerData = {
    image:
      'https://www.thethreadweavers.in/cdn/shop/collections/threadweavers_new_banner.jpg?v=1762516214',
    title: 'New Premium Collection 💯',
    description:
      'আমাদের কাছে পেয়ে যাচ্ছেন অরিজিনাল সিল্ক কাতান শাড়ী কালেকশন 💯',
    ctaText: 'শপ নাও',
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Responsive Banner */}
      <div className="relative w-full aspect-[16/7] sm:aspect-[16/6] md:h-[600px]">
        <img
          src={bannerData.image}
          alt="প্রিমিয়াম শাড়ী কালেকশন"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>
    </div>
  );
};

export default Slider;
