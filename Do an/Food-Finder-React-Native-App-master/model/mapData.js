const Images = [
    { image: require("../assets/banners/food-banner1.jpg") },
    { image: require("../assets/banners/food-banner2.jpg") },
    { image: require("../assets/banners/food-banner3.jpg") },
    { image: require("../assets/banners/food-banner4.jpg") },
];

export const markers = [
    {
      coordinate: {
        latitude: 10.9811969,
        longitude: 106.6809486,
      },
      title: "Nhà hàng The Alley Bình Dương TP HCM",
      description: "Trung Tâm sở hữu 9 sảnh tiệc với sức chứa từ 200 đến hơn 3.500 khách, phù hợp với mọi phong cách tổ chức cưới từ ấm áp thân mật đến tiệc hoành tráng, xa hoa. Tất cả sảnh tiệc đều được đầu tư trang trí theo từng chủ đề riêng, mang đến không gian hoàn hảo cho ngày vui trọng đại của bạn.",
      image: Images[0].image,
      rating: 4,
      reviews: 99,
    },
    {
      coordinate: {
        latitude: 11.0154764,
        longitude: 106.6787351,
      },
      title: "Nhà hàng The Alley",
      description: "Một điều đặc biệt tại Trung Tâm Tiệc Cưới Hội Nghị The Alley Ngô Quyền là với mỗi chương trình ưu đãi, nhà hàng luôn cam kết giữ giá trong mùa cao điểm. Đây là hành động tri ân dành cho sự tin tưởng dài lâu mà khách hàng đã trao gửi.",
      image: Images[1].image,
      rating: 5,
      reviews: 102,
    },
    {
      coordinate: {
        latitude: 11.0150236,
        longitude: 106.678424,
      },
      title: "Nhà hàng The Alley",
      description: "Một điều đặc biệt tại Trung Tâm Tiệc Cưới Hội Nghị The Alley 30/4 Vũng Tàu là với mỗi chương trình ưu đãi",
      image: Images[2].image,
      rating: 3,
      reviews: 220,
    },
    {
      coordinate: {
        latitude: 11.0158217,
        longitude: 106.6798894,
      },
      title: "Nhà hàng The Alley",
      description: "Một điều đặc biệt tại Trung Tâm Tiệc Cướ",
      image: Images[3].image,
      rating: 4,
      reviews: 48,
    },
    {
      coordinate: {
        latitude: 11.0071875,
        longitude: 106.6465925,
      },
      title: "Nhà hàng The Alley",
      description: "Địa chỉ: 365 P. Kim Mã, Ngọc Khánh, Ba Đình, Hà Nội, Việt Nam",
      image: Images[3].image,
      rating: 4,
      reviews: 178,
    },
];

export const mapDarkStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ];

  export const mapStandardStyle = [
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
  ];

