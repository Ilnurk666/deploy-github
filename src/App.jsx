import React from 'react';
import Categories from './Components/Categories';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Items from './Components/Items';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItems: [],
      orders: [],
      items: [
        {
          id: 1,
          title: "Toyota Supra",
          image: "./supra.jpeg",
          desc: "The Toyota Supra is a legendary sports car known for its performance, sleek design, and turbocharged inline-six engine. Its aggressive stance and cutting-edge technology make it a favorite among enthusiasts.",
          category: "Japan car",
          price: "11121.30$"
        },
        {
          id: 2,
          title: "Volkswagen Golf R",
          image: "./golf r.avif",
          desc: "The Volkswagen Golf R is a performance hatchback with all-wheel-drive, a turbocharged engine, and sharp handling. Its practical design and sporty nature make it a popular choice for enthusiasts.",
          category: "Germany car",
          price: "34500.30$"
        },
        {
          id: 3,
          title: "BMW M5",
          image: "./m5.jpeg",
          desc: "The BMW M5 is a high-performance sedan with a twin-turbocharged V8 engine, offering explosive power, precise handling, and the luxury you'd expect from a BMW flagship.",
          category: "Bad car",
          price: "103000.30$"
        },
        {
          id: 4,
          title: "Mercedes-Benz S-Class",
          image: "./s cl.jpeg",
          desc: "The Mercedes-Benz S-Class is the pinnacle of luxury sedans, featuring advanced technology, a plush interior, and powerful engine options, offering a refined and smooth ride.",
          category: "Germany car",
          price: "114000.30$"
        },
        {
          id: 5,
          title: "Mazda MX-5 Miata",
          image: "./mx5.jpeg",
          desc: "Lightweight, nimble, and fun to drive, the Mazda MX-5 Miata is an iconic roadster with sharp handling and a convertible top, perfect for those who love driving with the wind in their hair.",
          category: "Japan car",
          price: "29000.30$"
        },
        {
          id: 6,
          title: "Nissan GT-R",
          image: "./gtr.jpeg",
          desc: "Dubbed 'Godzilla,' the Nissan GT-R is a high-performance sports car with a twin-turbo V6 engine and advanced all-wheel-drive system, delivering incredible acceleration and precise handling.",
          category: "Japan car",
          price: "115000.30$"
        },
        {
          id: 7,
          title: "Porsche 911 Carrera",
          image: "./911.jpg",
          desc: "Known for its iconic design and thrilling performance, the Porsche 911 Carrera is a rear-engine sports car that offers a perfect balance between luxury and exhilarating driving dynamics.",
          category: "Bad car",
          price: "101000.30$"
        },
        {
          id: 8,
          title: "Honda Civic Type R",
          image: "./civic.webp",
          desc: "A high-performance hatchback, the Honda Civic Type R features a turbocharged 2.0-liter engine, aerodynamic styling, and a track-tuned suspension, offering a thrilling yet practical driving experience.",
          category: "Japan car",
          price: "45000.30$"
        },
        {
          id: 9,
          title: "Audi RS7",
          image: "./rs7.avif",
          desc: "The Audi RS7 is a high-performance luxury sedan with a twin-turbocharged V8 engine, offering blistering speed and dynamic handling while maintaining a sophisticated and stylish design.",
          category: "Germany car",
          price: "112000.30$"
        },
        {
          id: 10,
          title: "Lexus LC 500",
          image: "./lc500.jpg",
          desc: "The Lexus LC 500 is a luxurious grand tourer with a powerful 5.0-liter V8 engine and an exquisite interior. Its blend of luxury and performance creates an unforgettable driving experience.",
          category: "Japan car",
          price: "96000.30$"
        },
        {
          id: 11,
          title: "Subaru WRX STI",
          image: "./wrx.jpg",
          desc: "A rally-inspired sedan, the Subaru WRX STI boasts all-wheel-drive capability, a turbocharged engine, and sport-tuned suspension, making it a favorite for off-road and performance enthusiasts alike.",
          category: "Japan car",
          price: "39000.30$"
        },
        {
          id: 12,
          title: "Mercedes-AMG GT",
          image: "./amg gt.jpg",
          desc: "The Mercedes-AMG GT is a two-door sports car with a handcrafted twin-turbo V8 engine, delivering a thrilling driving experience with luxury and cutting-edge technology.",
          category: "Germany car",
          price: "151000.30$"
        },
        {
          id: 13,
          title: "Mitsubishi Lancer Evolution X",
          image: "./evo x.jpg",
          desc: "The Mitsubishi Lancer Evolution X is a high-performance sedan with a turbocharged engine and advanced all-wheel-drive system. Its rally heritage shines through its sharp handling and acceleration.",
          category: "Japan car",
          price: "38000.30$"
        },
        {
          id: 14,
          title: "Porsche Panamera",
          image: "./panamera.jpeg",
          desc: "The Porsche Panamera is a luxurious four-door sedan that blends sports car performance with comfort and practicality. Its powerful engines and refined interior make it a standout in its class.",
          category: "Bad car",
          price: "128000.30$"
        },
        {
          id: 15,
          title: "Infiniti Q60 Red Sport 400",
          image: "./q60.jpeg",
          desc: "With a twin-turbocharged V6 engine producing 400 horsepower, the Infiniti Q60 Red Sport 400 offers sleek coupe styling, luxurious features, and sharp performance.",
          category: "Japan car",
          price: "51000.30$"
        },
        {
          id: 16,
          title: "BMW X5 M",
          image: "./x5m.jpeg",
          desc: "A high-performance SUV, the BMW X5 M offers a twin-turbo V8 engine, aggressive styling, and advanced technology, combining sports car performance with SUV practicality and luxury.",
          category: "Germany car",
          price: "122000.30$"
        },
        {
          id: 17,
          title: "Acura NSX",
          image: "./nsx.jpeg",
          desc: "A hybrid supercar, the Acura NSX combines a twin-turbocharged V6 with three electric motors for impressive power and all-wheel-drive handling. Its futuristic design and cutting-edge tech set it apart.",
          category: "Japan car",
          price: "157000.30$"
        },
        {
          id: 18,
          title: "Audi R8",
          image: "./r8.jpeg",
          desc: "A supercar with everyday usability, the Audi R8 boasts a naturally aspirated V10 engine, a striking design, and the famous Audi Quattro all-wheel-drive system for exceptional handling.",
          category: "Germany car",
          price: "145000.30$"
        },
        {
          id: 19,
          title: "Toyota Land Cruiser",
          image: "./cruiser.jpeg",
          desc: "A legendary off-road vehicle, the Toyota Land Cruiser is known for its ruggedness, durability, and luxurious interior. It's capable of tackling tough terrains while offering a smooth ride.",
          category: "Japan car",
          price: "85000.30$"
        },
        {
          id: 20,
          title: "BMW i8",
          image: "./public/i8.jpeg",
          desc: "A plug-in hybrid sports car, the BMW i8 combines futuristic styling with a turbocharged engine and electric motor, offering both performance and eco-friendly driving in a unique package.",
          category: "Bad car",
          price: "120000.30$"
        }
      ]
    };
    this.state.currentItems = this.state.items
    this.addOrder = this.addOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  deleteOrder(id) {
    //console.log(id)
    this.setState({orders: this.state.orders.filter(el =>
      el.id !== id
    )})

  }

  addOrder(item) {
    let arrayId = false;
    this.state.orders.map(el => {
      if (el.id === item.id) {
        arrayId = true;
      }
    });

    if (!arrayId) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }

  render(props) {
    return (
      <div className='Wrapper'>
        <Header orders={this.state.orders} onDelete = {this.deleteOrder} />
        <Categories chooseCategory = {this.chooseCategory}/>
        <Items items={this.state.currentItems} onAdd={this.addOrder} />
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    const orders = JSON.parse(localStorage.getItem('orders'));
    if (orders) {
      this.setState({ orders });
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.orders !== this.state.orders) {
      localStorage.setItem('orders', JSON.stringify(this.state.orders));
    }
  }

chooseCategory(category) {
  if (category === 'all') {
    this.setState({currentItems: this.state.items})
    return
  }
  this.setState({currentItems: this.state.items.filter(el => el.category === category)})  
  }
}


export default App;
