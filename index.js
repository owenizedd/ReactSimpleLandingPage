// UGLY CODE For quick development
class Pages extends React.Component{
  state={
    page: 'landing'
  }
  render(){
    return(
      <React.Fragment>
        <header>
          <div className="home">
            <img src="logo.svg" alt="" className="logo"/>
            <h2 onClick={this.showHome}>HOME</h2>
          </div>
          <nav>
            <a href="#">About</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
            <a href="#" class="bordered-button" onClick={this.showLogin}>Login</a>
          </nav>
        </header>

        {this.state.page === 'landing' && <Pricing/>}
        
      </React.Fragment>
    )
  }
}

const Landing = () => {
  return(
    <main>
      <p className="text-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatibus eius facilis repellendus, aliquam fugit aperiam doloremque earum deleniti ipsum recusandae a esse.</p>
      <p className="text-block">amet! Veritatis corporis harum animi dolores, repudiandae non</p>
      <img src="metrics.svg" height="150" alt="" style={{marginLeft: '50px'}}/>
      <img src="lighthouse.svg" class="imglanding" alt=""/>
    </main>
  )
}
const About = () => {
  return(
    
  )
}
const Pricing = () => {
  return(
    <main>
      <div className="boxes">
        <div className="box">
          <h3 className="title">Basic</h3>
          <div className="features">
            <p>- Mencatat Barang Masuk</p>
            <p>- Mencatat barang Keluar</p>
            <p>- Mencatat hasil keuntungan</p>

          </div>
          <div className="price">300.000</div>        
        </div>
        <div className="box">
          <h3 className="title">Business</h3>
          <div className="features">
            <p>- Mencatat Barang Masuk</p>
            <p>- Mencatat barang Keluar</p>
            <p>- Mencatat hasil keuntungan</p>

          </div>
          <div className="price">500.000</div>        
        </div>
        <div className="box">
          <h3 className="title">Entrepreneur</h3>
          <div className="features">
            <p>- Mencatat Barang Masuk</p>
            <p>- Mencatat barang Keluar</p>
            <p>- Mencatat hasil keuntungan</p>

          </div>
          <div className="price">700.000</div>                
        </div>
      </div>
    </main>
  )
}
ReactDOM.render(
  <Pages/>,
  document.getElementById('root')
)